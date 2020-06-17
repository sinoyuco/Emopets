import axios from 'axios';

export const fetchNotifications = (userId) => (
    axios.get(`api/notifications/${userId}`)
);