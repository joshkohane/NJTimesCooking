import RecipePage from './recipe_page';
import { connect } from 'react-redux';
import { fetchOneRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';

const mapSTP = (state, ownProps) => {
    // debugger;
    return {
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    // ingredients: state.entities.ingredients,
    ingredientLists: Object.values(state.entities.ingredientLists),
    loggedIn: Boolean(state.session.currentUser),
    isModalOpen: Boolean(state.ui.modal)
    // author: state.entities.author,
}}

const mapDTP = dispatch => ({
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
})

export default connect(mapSTP, mapDTP)(RecipePage);