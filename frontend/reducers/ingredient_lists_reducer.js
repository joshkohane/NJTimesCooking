import { RECEIVE_RECIPE, RECEIVE_ALL_RECIPES } from '../actions/recipe_actions';
import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {}

    switch (action.type) {
        case RECEIVE_RECIPE:
            return Object.assign({}, newState, action.recipe.ingredientLists);
        default:
            return oldState;
    }
}