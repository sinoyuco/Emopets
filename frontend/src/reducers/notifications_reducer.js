import {RECEIVE_NOTIFICATIONS} from '../actions/notification_actions';

const notificationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NOTIFICATIONS: 
            let notifs = {};
            action.notifications.data.forEach(notif => {
                notifs[notif._id] = notif
            });
            return Object.assign({}, state, notifs);
        default:
            return state;
    }
}

export default notificationsReducer;