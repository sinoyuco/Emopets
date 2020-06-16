import { connect } from 'react-redux';
import SplashPage from './splash_page';
import {fetchUsers} from '../../actions/user_actions'

const mapStateToProps = (state) => {
  return {users: state.users}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);