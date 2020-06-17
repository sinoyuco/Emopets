import {RECEIVE_LIKE, RECEIVE_USER_LIKES} from '../actions/like_actions';

const likesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LIKE:
            debugger;
            return Object.assign({},state,{[action.like.data._id]: action.like.data});
        case RECEIVE_USER_LIKES:
            let likes = {};
            action.likes.data.forEach(like => {
                likes[like._id] = like
            });
            return Object.assign({},state,likes);
        default:
            return state;
    }
}

export default likesReducer;