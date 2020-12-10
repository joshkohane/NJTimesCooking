import { RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_RECIPE:
            return Object.assign({}, oldState, action.recipe.ingredientLists);
        default:
            return oldState;
    }
}