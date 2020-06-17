import { connect } from 'react-redux';
import Play from './play_form';
import { fetchUsers } from '../../actions/user_actions'

const mSTP = (state) => ({ 
    users: Object.values(state.users) 
});

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP,mDTP)(Play);