import * as APIUtil from '../util/likes_util';
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_USER_LIKES = "RECEIVE_USER_LIKES";

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

const receiveUserLikes = (likes) => ({
    type: RECEIVE_USER_LIKES,
    likes
});

export const postLike = (like) => dispatch => {
    return APIUtil.postLike(like).then(like => (
        dispatch(receiveLike(like))
    ))
}

export const fetchLikes = (userId) => dispatch => {
    return APIUtil.fetchLikes(userId).then(likes => (
        dispatch(receiveUserLikes(likes))
    ))
}

