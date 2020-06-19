import axios from 'axios';

export const fetchNotifications = (userId) => (
    axios.get(`api/notifications/${userId}`)
);

export const updateNotifications = (notifId) => {
    debugger;
    return axios.patch(`api/notifications/${notifId}`)
};