import { RECEIVE_NOTIFICATIONS, CLEAR_NOTIFICATIONS, UPDATE_NOTIFICATION} from '../actions/notification_actions';
// import { RECEIVE_USER_LOGOUT} from '../actions/session_actions';

const notificationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NOTIFICATIONS: 
            let notifs = {};
            action.notifications.data.forEach(notif => {
                notifs[notif._id] = notif
            });
            return Object.assign({}, notifs);

        case UPDATE_NOTIFICATION:
            debugger;
            return state;
        
        case CLEAR_NOTIFICATIONS:
            return [];

        // case UPDATE_NOTIFICATIONS:
        //     return 
        default:
            return state;
    }
}

export default notificationsReducer;