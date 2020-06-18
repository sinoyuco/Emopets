import {RECEIVE_NOTIFICATIONS} from '../actions/notification_actions';
import { RECEIVE_USER_LOGOUT} from '../actions/session_actions';

const notificationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NOTIFICATIONS: 
            let notifs = {};
            action.notifications.data.forEach(notif => {
                notifs[notif._id] = notif
            });
            return Object.assign({}, state, notifs);
        case RECEIVE_USER_LOGOUT:
            return [];

        // case RECEIVE_CURRENT_USER:
        //     return ;

        default:
            return state;
    }
}

export default notificationsReducer;