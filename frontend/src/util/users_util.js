import axios from 'axios';

export const fetchUsers = () => (
    axios.get('api/users/')
);

export const likeUser = (user) => (
    axios.post('api/likes/', user)
);

export const fetchUser = (userId) => (
    axios.get(`api/users/${userId}`, userId)
);