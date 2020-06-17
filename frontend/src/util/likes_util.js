import axios from 'axios';

export const postLike = (like) => (
    axios.post('api/likes/', like)
);

export const fetchLikes = (userId) => (
    axios.get(`api/likes/${userId}`)
);