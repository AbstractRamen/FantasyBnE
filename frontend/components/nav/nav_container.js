import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';
import Nav from './nav';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav));
