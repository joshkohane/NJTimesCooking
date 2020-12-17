import RecipePage from './recipe_page';
import { connect } from 'react-redux';
import { fetchOneRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';
import { clearSearch } from '../../actions/recipe_actions';
import { addThisComment, deleteThisComment } from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => {
    // debugger;
    return {
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    // ingredients: state.entities.ingredients,
    ingredientLists: Object.values(state.entities.ingredientLists),
    loggedIn: Boolean(state.session.currentUser),
    isModalOpen: Boolean(state.ui.modal),
    comments: Object.values(state.entities.comments),
    // author: state.entities.author,
}}

const mapDTP = dispatch => ({
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
    clearSearch: () => dispatch(clearSearch()),
    addThisComment: (recipeId, text) => dispatch(addThisComment(recipeId, text)),
    deleteThisComment: (commentId) => dispatch(deleteThisComment(commentId)),
})

export default connect(mapSTP, mapDTP)(RecipePage);