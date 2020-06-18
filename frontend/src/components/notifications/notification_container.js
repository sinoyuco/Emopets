import { connect } from 'react-redux';
import { fetchNotifications } from '../../actions/notification_actions';
import { fetchUsers } from '../../actions/user_actions';
import Notifications from './notification'
// import { fetchUser } from '../../util/users_util';

const mSTP = state => {
    return {
        currentUser: state.session.user,
        likes: state.likes,
        notifications: Object.values(state.notifications),
        users: state.users
    };

    }

const mDTP = dispatch => ({
    fetchNotifications: (userId) => dispatch(fetchNotifications(userId)),
    fetchUsers: () => dispatch(fetchUsers())

});


export default connect(mSTP, mDTP)(Notifications);