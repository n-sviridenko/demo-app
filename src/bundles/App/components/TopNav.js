import { IndexLink, Link } from 'react-router';
import React, { PropTypes } from 'react';
import { Navbar, Nav, Dropdown, MenuItem, Modal, SafeAnchor } from 'react-bootstrap';

import AuthForm from 'bundles/User/forms/AuthForm';

const propTypes = {
  user: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  isLoginFormShown: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  showLoginForm: PropTypes.func.isRequired,
  hideLoginForm: PropTypes.func.isRequired,
};

class TopNav extends React.Component {
  renderUserbar() {
    const { user, isFetching, showLoginForm, logout } = this.props;

    if (user) {
      return (
        <Dropdown className="nav-item" id="userbar">
          <Dropdown.Toggle className="nav-link" useAnchor>
            {user.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <MenuItem divider />
            <button
              type="button"
              className="dropdown-item"
              disabled={isFetching}
              onClick={logout}
            >
              Sign out
            </button>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    return (
      <li className="nav-item">
        <SafeAnchor className="nav-link" onClick={showLoginForm}>Sign in</SafeAnchor>
      </li>
    );
  }

  render() {
    const { isLoginFormShown, hideLoginForm } = this.props;

    return (
      <div>
        <Nav className="pull-right">
          <li className="nav-item">
            <IndexLink to="/" className="nav-link">App</IndexLink>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="nav-link">Counter</Link>
          </li>
          {this.renderUserbar()}
        </Nav>
        <Modal bsSize="sm" show={isLoginFormShown} onHide={hideLoginForm}>
          <Modal.Header>
            <Modal.Title>Authorization</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AuthForm />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

TopNav.propTypes = propTypes;

export default TopNav;
