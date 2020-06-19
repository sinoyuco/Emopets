import axios from 'axios';

export const fetchNotifications = (userId) => (
    axios.get(`api/notifications/${userId}`)
);

export const updateNotifications = (userId) => {
    debugger;
    return axios.patch(`api/notifications/${userId}`)
};