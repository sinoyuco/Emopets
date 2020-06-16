import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
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