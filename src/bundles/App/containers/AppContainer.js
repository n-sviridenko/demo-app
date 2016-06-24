import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import '../assets/main.scss';

const propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  routerKey: PropTypes.number,
  store: PropTypes.object.isRequired,
};

function AppContainer(props) {
  const { history, routes, routerKey, store } = props;

  return (
    <Provider store={store}>
      <div style={{ height: '100%' }}>
        <Router history={history} children={routes} key={routerKey} />
      </div>
    </Provider>
  );
}

AppContainer.propTypes = propTypes;

export default AppContainer;
