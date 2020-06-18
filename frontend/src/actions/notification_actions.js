import * as APIUtil from '../util/notifications_util';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";

const receiveNotifications = (notifications) => ({
    type: RECEIVE_NOTIFICATIONS,
    notifications
});

export const clearNotifications = () => ({
    type: CLEAR_NOTIFICATIONS
})

export const fetchNotifications = (userId) => dispatch => {
    return APIUtil.fetchNotifications(userId).then(notifs => (
        dispatch(receiveNotifications(notifs))
    ))
};
