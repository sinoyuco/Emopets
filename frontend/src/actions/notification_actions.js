import * as APIUtil from '../util/notifications_util';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";

const receiveNotifications = (notifications) => ({
    type: RECEIVE_NOTIFICATIONS,
    notifications
});


export const fetchLikes = (userId) => dispatch => {
    return APIUtil.fetchNotifications(userId).then(notifs => (
        dispatch(receiveNotifications(notifs))
    ))
}
