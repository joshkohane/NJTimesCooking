import { getUser } from '../util/user_util';

export const GET_THIS_USER = 'GET_THIS_USER';

export const fetchUser = (user) => ({
    type: GET_THIS_USER,
    user
})

export const fetchThisUser = userId => dispatch => getUser(userId)
    .then(user => dispatch(fetchUser(user)))