import axios from 'axios';

export const postLike = (userId) => (
    axios.post(`api/likes/${userId}`)
);

export const fetchLikes = (userId) => (
    axios.get(`api/likes/${userId}`)
);