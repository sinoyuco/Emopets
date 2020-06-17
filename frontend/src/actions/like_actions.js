import * as APIUtil from '../util/likes_util';
export const RECEIVE_LIKE = "RECEIVE_LIKE";

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

export const postLike = (userId) => dispatch => {
    return APIUtil.postLike(userId).then(like => (
        dispatch(receiveLike(like))
    ))
}

