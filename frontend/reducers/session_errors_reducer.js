import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return Object.assign([], action.errors);
        default:
            return oldState;
    }
}