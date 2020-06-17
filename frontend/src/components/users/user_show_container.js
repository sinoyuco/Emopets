import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchUser} from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        // user: state.users[ownProps.match.params._id]
        currentUser: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: (id) => dispatch(fetchUser(id))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);