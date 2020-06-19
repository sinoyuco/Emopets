import {connect} from 'react-redux';
import {editUser, fetchUser, fetchUsers} from '../../actions/user_actions';
import {clearSessionErrors} from '../../actions/session_actions';
import EditForm from './edit_form';

const mSTP = state => ({
    currentUser: state.session.user,
    errors: state.errors.session
});

const mDTP = dispatch => ({
    editUser: (user) => dispatch(editUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(EditForm);
