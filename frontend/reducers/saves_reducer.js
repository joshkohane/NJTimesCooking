import { RECEIVE_SAVE, DELETE_A_SAVE } from '../actions/save_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            return Object.assign({}, action.recipes.saves);
            // return Object.assign({}, oldState, action.user.saves);
        case RECEIVE_RECIPE:
            return Object.assign({}, action.recipe.saves);
        case RECEIVE_SAVE:
            newState[action.save.id] = action.save;
            return newState;
        case DELETE_A_SAVE:
            delete newState[action.save.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}