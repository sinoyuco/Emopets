import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_ALL_USERS, UPDATE_USER, RECEIVE_USER} from '../actions/user_actions'

const usersReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:

            const id1 = action.currentUser.data ? action.currentUser.data._id : action.currentUser.id
            const user1 = action.currentUser.data ? action.currentUser.data : action.currentUser
            return Object.assign({}, state, { [id1]: user1 } );

        case RECEIVE_ALL_USERS:
                let allUsers = {};
              
            action.users.data.forEach(user => {
                allUsers[user._id] = user
            })

            return Object.assign({}, state, allUsers);

        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user._id]: action.user});


        case UPDATE_USER:

            let id = JSON.parse(action.user.config.data).id
            let user = JSON.parse(action.user.config.data)
            return Object.assign({}, state, {[id]: user});

            // return Object.assign({}, {[action.user.data._id]: JSON.parse(action.user.data)});


        default:
            return state;
    }
}

export default usersReducer;