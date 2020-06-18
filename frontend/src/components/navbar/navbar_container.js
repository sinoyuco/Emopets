import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from "../../actions/session_actions";
import { fetchNotifications, clearNotifications } from '../../actions/notification_actions';

const mapStateToProps = (state) => {
  return({
  currentUser: state.session.user,
  notifications: Object.values(state.notifications)
 
})}

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout()),
    fetchNotifications: userId => dispatch(fetchNotifications(userId)),
    clearNotifications: () => dispatch(clearNotifications())
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);