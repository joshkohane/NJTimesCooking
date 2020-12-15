import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user});
        // case RECEIVE_RECIPE:
        //     return Object.assign({}, oldState, action.recipe.author);
        default:
            return oldState;
    }
}