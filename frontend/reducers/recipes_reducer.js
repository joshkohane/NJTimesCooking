import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_SAVE, DELETE_A_SAVE } from '../actions/save_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes.recipes;
        case RECEIVE_RECIPE:
            // debugger;
            return Object.assign({}, oldState, action.recipe.recipe);
        case RECEIVE_SAVE:
            newState[action.save.recipeId].saveId = action.save.id;
            return newState;
        case DELETE_A_SAVE:
            delete newState[action.save.recipeId].saveId
            return newState;
        case RECEIVE_CURRENT_USER:
            // debugger;
            if (action.user.saves) {
                Object.values(action.user.saves).map(save => {
                    newState[save.recipeId].saveId = save.id;
                })
            }
            return newState;
        default:
            return oldState;
    }
}