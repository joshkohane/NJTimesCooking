import RecipePage from './recipe_page';
import { connect } from 'react-redux';
import { fetchOneRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';
import { clearSearch } from '../../actions/recipe_actions';
import { addThisComment, updateThisComment, deleteThisComment } from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    ingredientLists: Object.values(state.entities.ingredientLists),
    loggedIn: Boolean(state.session.currentUser),
    isModalOpen: Boolean(state.ui.modal),
    comments: Object.values(state.entities.comments),
    currentUser: state.session.currentUser
})

const mapDTP = dispatch => ({
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
    clearSearch: () => dispatch(clearSearch()),
    addThisComment: (recipeId, text) => dispatch(addThisComment(recipeId, text)),
    updateThisComment: (commentId, text) => dispatch(updateThisComment(commentId, text)),
    deleteThisComment: (commentId) => dispatch(deleteThisComment(commentId)),
})

export default connect(mapSTP, mapDTP)(RecipePage);