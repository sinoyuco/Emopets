import {RECEIVE_LIKE} from '../actions/like_actions';

const likesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_LIKE:
            return Object.assign({},state,{[action.like._id]: action.like});
        default:
            return state;
    }
}

export default likesReducer;