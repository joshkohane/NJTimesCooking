import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_ERRORS } from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return Object.assign([], action.errors);
        case RESET_ERRORS:
            return [];
        default:
            return oldState;
    }
}