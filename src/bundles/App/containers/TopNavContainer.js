import { connect } from 'react-redux';
import { showLoginForm, hideLoginForm, logout } from 'bundles/User/modules/auth';

import TopNav from '../components/TopNav';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  isFetching: auth.isFetching,
  isLoginFormShown: auth.isLoginFormShown,
});

const mapActionCreators = {
  showLoginForm,
  hideLoginForm,
  logout,
};

export default connect(mapStateToProps, mapActionCreators)(TopNav);
