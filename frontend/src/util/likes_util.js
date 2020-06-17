import axios from 'axios';

export const postLike = (userId) => (
    axios.post(`api/likes/${userId}`)
);