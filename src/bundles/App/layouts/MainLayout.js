import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';

import TopNavContainer from '../containers/TopNavContainer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function MainLayout({ children }) {
  return (
    <div className="container text-center">
      <Navbar bsStyle="light">
        <TopNavContainer />
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  );
}

MainLayout.propTypes = propTypes;

export default MainLayout;
