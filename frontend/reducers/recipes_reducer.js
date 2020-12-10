import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes;
        case RECEIVE_RECIPE:
            return Object.assign({}, oldState, action.recipe.recipe);
        default:
            return oldState;
    }
}