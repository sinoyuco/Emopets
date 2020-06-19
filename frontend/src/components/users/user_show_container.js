import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import { fetchNotifications } from '../../actions/notification_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        currentUser: state.session.user,
        notifications: state.notifications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchNotifications: userId => dispatch(fetchNotifications(userId))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);