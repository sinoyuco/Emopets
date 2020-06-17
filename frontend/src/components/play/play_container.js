import { connect } from 'react-redux';
import Play from './play_form';
import { fetchUsers } from '../../actions/user_actions'
import { postLike, fetchLikes } from '../../actions/like_actions';

const mSTP = (state) => { 
    debugger
    return {
    users: Object.values(state.users),
    currentUser: state.session.user,
    likes: Object.keys(state.likes) }
};

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    postLike: (userId) => dispatch(postLike(userId)),
    fetchLikes: (userId) => dispatch(fetchLikes(userId))
})

export default connect(mSTP,mDTP)(Play);