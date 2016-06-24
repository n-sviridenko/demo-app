import Cookie from 'js-cookie';
import { unsetUser, showLoginForm } from 'bundles/User/modules/auth';
import { merge } from './url';
import apiConfig from '../config/api';

export default function callApi(request) {
  const {
    endpoint,
    dispatch,
    rollbackAction = () => {},
    successAction = () => {},
    failureAction = () => {},
    ...rest,
  } = request;

  const fetchDefaults = {
    credentials: 'include',
    headers: {
      'X-XSRF-TOKEN': Cookie.get('XSRF-TOKEN'),
      Accept: 'application/json',
    },
  };

  const endpointUrl = merge(apiConfig.baseUrl, endpoint, 'path', 'query');
  const fetchParams = { ...fetchDefaults, ...rest };

  fetch(endpointUrl, fetchParams)
    .then(
      res => res.json().then(
        data => ({
          status: res.status,
          data,
        }),
        () => ({
          status: res.status,
          data: null,
        })
      )
    )
    .catch(() => ({
      status: -1,
      data: null,
    }))
    .then(({ status, data }) => {
      if (status === 401) {
        dispatch(unsetUser());
        dispatch(showLoginForm());

        rollbackAction();
      } else {
        if (status >= 200 && status < 300) {
          successAction(data, status);
        } else {
          failureAction(data, status);
        }
      }
    });
}
