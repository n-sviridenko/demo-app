import callApi from '../utils/callApi';

export const CALL_API = Symbol('Call API');

export default function callApiMiddleware({ dispatch }) {
  return (next) => (action) => { // eslint-disable-line consistent-return
    if (!action.hasOwnProperty(CALL_API)) {
      return next(action);
    }

    const { types, ...rest } = action[CALL_API];
    const [requestType = null, rollbackType = null, successType = null, failureType = null] = types;

    if (requestType) {
      next({ type: requestType });
    }

    const params = { ...rest, dispatch };

    if (rollbackType) {
      params.rollbackAction = () => next({ type: rollbackType });
    }

    if (successType) {
      params.successAction = (payload, status) => next({
        type: successType,
        meta: { status },
        payload,
      });
    }

    if (failureType) {
      params.failureAction = (payload, status) => next({
        type: failureType,
        meta: { status },
        payload,
      });
    }

    callApi(params);
  };
}
