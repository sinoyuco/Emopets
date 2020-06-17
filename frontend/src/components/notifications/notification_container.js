import { connect } from 'react-redux';
import { fetchLikes } from '../../actions/notification_actions';
import Notifications from './notification'

const mSTP = state => {
    debugger;
    return {
        currentUser: state.session.user,
        likes: state.likes,
        notifications: state.notifications
    };

    }

const mDTP = dispatch => ({
    fetchLikes: (userId) => dispatch(fetchLikes(userId))

});


export default connect(mSTP, mDTP)(Notifications);