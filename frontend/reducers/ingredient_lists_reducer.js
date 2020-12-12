import { RECEIVE_RECIPE, RECEIVE_ALL_RECIPES } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {}

    switch (action.type) {
        case RECEIVE_RECIPE:
            return Object.assign({}, newState, action.recipe.ingredientLists);
        case RECEIVE_ALL_RECIPES:
            return [];
        default:
            return oldState;
    }
}