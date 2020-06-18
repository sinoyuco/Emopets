import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_ALL_USERS, UPDATE_USER} from '../actions/user_actions'

const usersReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            debugger;
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});

        case RECEIVE_ALL_USERS:
                let allUsers = {};
              
            action.users.data.forEach(user => {
                allUsers[user._id] = user
            })

            return Object.assign({}, state, allUsers);

        // case RECEIVE_USER:
        //     debugger;
        //     return Object.assign({}, state, {[action.user.data._id]: action.user.data});

        case UPDATE_USER:
            debugger;
            let id = JSON.parse(action.user.config.data).id
            let user = JSON.parse(action.user.config.data)
            return Object.assign({}, state, {[id]: user});

            // return Object.assign({}, {[action.user.data._id]: JSON.parse(action.user.data)});


        default:
            return state;
    }
}

export default usersReducer;