import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes;
        case RECEIVE_RECIPE:
            // debugger
            return Object.assign({}, newState, action.recipe.recipe);
            // return newState;
        default:
            return oldState;
    }
}