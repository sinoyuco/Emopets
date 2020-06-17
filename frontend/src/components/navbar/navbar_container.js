import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return({
  currentUser: state.session.user
  // currentUser: state.entities.users[state.session.id],
})}

const mapDispatchToProps = dispatch => (
  {logout: () => dispatch(logout())}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);