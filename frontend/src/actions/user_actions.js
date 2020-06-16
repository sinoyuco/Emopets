import * as APIUtil from '../util/users_util';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"


export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchUsers = () => dispatch => {
    return APIUtil.fetchUsers().then(users => (
        dispatch(receiveAllUsers(users))
    ))
}