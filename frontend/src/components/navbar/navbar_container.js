import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from "../../actions/session_actions";
import { fetchNotifications } from '../../actions/notification_actions';

const mapStateToProps = (state) => {
  debugger;
  return({
  currentUser: state.session.user,
  notifications: Object.values(state.notifications)
  // currentUser: state.entities.users[state.session.id],
})}

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout()),
    fetchNotifications: userId => dispatch(fetchNotifications(userId))
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);