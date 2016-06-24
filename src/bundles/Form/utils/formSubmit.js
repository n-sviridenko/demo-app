import _ from 'underscore';
import callApi from 'bundles/App/utils/callApi';

function createFormData(values) {
  const data = new FormData();

  _.each(values, (value, key) => data.append(
    key, typeof value === 'undefined' || value === null ? '' : value
  ));

  return data;
}

export default function formSubmit(options) {
  return (values, dispatch) => (
    new Promise((resolve, reject) => {
      const { successAction, failureAction = null, ...rest } = options;

      callApi({
        body: createFormData(values),
        rollbackAction: () => resolve(),
        successAction: (payload, status) => {
          resolve();

          successAction({ payload, status, dispatch });
        },
        failureAction: (payload, status) => {
          if (_.isFunction(failureAction)) {
            failureAction({ payload, status, dispatch, reject });
          } else {
            if (status === 422) {
              const errors = _.chain(payload.errors)
                .map((messages, field) => [field, messages[0]])
                .push(['_error', 'message' in payload ? payload.message : null])
                .object()
                .value();

              reject(errors);
            } else {
              reject({ _error: `${status}` });
            }
          }
        },
        dispatch,
        ...rest,
      });
    })
  );
}
