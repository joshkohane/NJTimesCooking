import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = { currentUser: null }

export default (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.currentUser = action.user.id;
            // newState.currentUser = parseInt(Object.keys(action.user.user)[0]);
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return oldState;
    }
}