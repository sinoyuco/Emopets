import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import users from './users_reducer';
import likes from './likes_reducer';
import notifications from './notifications_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  users,
  likes,
  notifications
});

export default RootReducer;