import { connect } from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = (state) => {
  debugger
  return({
  currentUser: state.session.user
  // currentUser: state.entities.users[state.session.id],
})}

const mapDispatchToProps = dispatch => (
  null
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);