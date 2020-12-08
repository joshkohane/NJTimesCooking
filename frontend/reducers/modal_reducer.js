import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default (oldState = 'login', action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return oldState;
    }
}