import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';
import { UPDATE_USER } from '../actions/user_actions';

// import {} from '../actions/user_actions'
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        // user: action.currentUser.data
        user: action.currentUser.data ? action.currentUser.data : action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        isAuthenticated: true,
      }

    case UPDATE_USER:
      debugger;
      // let id = JSON.parse(action.user.config.data).id
      let user = JSON.parse(action.user.config.data)
      return {
        ...state,
        isAuthenticated: !!user,
        user: user
      };
    default:
      return state;
  }
}