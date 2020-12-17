import { RECEIVE_SAVE, DELETE_A_SAVE } from '../actions/save_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { GET_THIS_USER } from '../actions/user_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SAVE:
            newState[action.save.id] = action.save;
            return newState;
        case DELETE_A_SAVE:
            delete newState[action.save.id];
            return newState;
        case GET_THIS_USER:
            return Object.assign({}, action.user.saves);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, action.user.saves)
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}