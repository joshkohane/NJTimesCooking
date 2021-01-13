import { RECEIVE_SEARCH_PAGE, CLEAR_SEARCH_PAGE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SEARCH_PAGE:
            return action.recipes;
        case CLEAR_SEARCH_PAGE:
            return {};
        default:
            return oldState;
    }
}