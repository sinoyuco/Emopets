import {connect} from 'react-redux';
import {editUser, fetchUser} from '../../actions/user_actions';
import EditForm from './edit_form';

const mSTP = state => ({
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    editUser: (user) => dispatch(editUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(EditForm);
