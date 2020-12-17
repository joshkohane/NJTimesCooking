import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState
        case DELETE_COMMENT:
            delete newState[action.comment.id]
            return newState;
        case RECEIVE_RECIPE:
            return Object.assign({}, newState, action.recipe.comments);
        default:
            return oldState;
    }
}