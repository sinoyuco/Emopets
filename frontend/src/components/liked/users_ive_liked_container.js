import { connect } from 'react-redux';
import UsersIveLiked from './users_ive_liked';
import { fetchLikes } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchNotifications } from '../../actions/notification_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    users: state.users,
    likes: state.likes,
    notifications: state.notifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLikes: (userId) => dispatch(fetchLikes(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchNotifications: (userId) => dispatch(fetchNotifications(userId)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIveLiked);