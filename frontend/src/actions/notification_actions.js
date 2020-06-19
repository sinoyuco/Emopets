import * as APIUtil from '../util/notifications_util';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";
export const UPDATE_NOTIFICATION = "UPDATE_NOTIFICATION";

const receiveNotifications = (notifications) => ({
    type: RECEIVE_NOTIFICATIONS,
    notifications
});

const updateNotification = (notification) => ({
    type: UPDATE_NOTIFICATION,
    notification
});


export const clearNotifications = () => ({
    type: CLEAR_NOTIFICATIONS
})

export const fetchNotifications = (userId) => dispatch => {
    return APIUtil.fetchNotifications(userId).then(notifs => (
        dispatch(receiveNotifications(notifs))
    ))
};

export const flipNotification = (notifId) => dispatch => {
    return APIUtil.updateNotifications(notifId).then(notif => (
        dispatch(updateNotification(notif))
    ))
};
