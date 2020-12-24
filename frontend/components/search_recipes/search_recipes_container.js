import SearchRecipes from './search_recipes'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';
import { clearSearch } from '../../actions/recipe_actions';

const mapSTP = state => ({
    loggedIn: Boolean(state.session.currentUser),
})

const mapDTP = dispatch => ({
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearSearch: () => dispatch(clearSearch()),
})

export default connect(mapSTP, mapDTP)(SearchRecipes);
