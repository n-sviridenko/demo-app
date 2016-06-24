import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store/createStore';
import AppContainer from 'bundles/App/containers/AppContainer';

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__,
});

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
const store = createStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
});

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = (routerKey = null) => {
  const routes = require( // eslint-disable-line global-require
    'bundles/App/routes/AppRoute'
  ).default(store);

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
      routerKey={routerKey}
    />,
    MOUNT_NODE
  );
};

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
function renderError(error) {
  const RedBox = require('redbox-react'); // eslint-disable-line global-require

  ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
}

if (__DEV__ && module.hot) {
  const renderApp = render;

  render = () => {
    try {
      renderApp(Math.random());
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept(['bundles/App/routes/AppRoute'], () => render());
}

// ========================================================
// Go!
// ========================================================
render();