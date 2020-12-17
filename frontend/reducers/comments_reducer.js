import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_RECIPE } from '../actions/recipe_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, newState, action.comment.comment);
        case DELETE_COMMENT:
            // debugger;
            delete newState[parseInt(Object.keys(action.comment.comment)[0])]
            return newState;
        case RECEIVE_RECIPE:
            // debugger;
            if (action.recipe.comments) {
                return action.recipe.comments;
            } else {
                return {};
            }
        default:
            return oldState;
    }
}