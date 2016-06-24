import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from 'bundles/User/modules/auth';

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    router,
    form,
    auth,
    ...asyncReducers,
  });
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export default makeRootReducer;
