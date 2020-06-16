import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state) => {
    debugger;
    return {
        errors: state.errors.session,
        currentUser: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);