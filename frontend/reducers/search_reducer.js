import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SEARCH:
            return action.recipes;
        case CLEAR_SEARCH:
            return {};
        default:
            return oldState;
    }
}