import SearchRecipes from './search_recipes'
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';
import { clearSearch, searchPage, clearSearchPage } from '../../actions/recipe_actions';
import { fetchEveryRecipe } from '../../actions/recipe_actions';

const mapSTP = state => ({
    loggedIn: Boolean(state.session.currentUser),
    recipes: state.entities.recipes,
    searches: Object.values(state.entities.searchPage),
})

const mapDTP = dispatch => ({
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearSearch: () => dispatch(clearSearch()),
    searchPage: (query) => dispatch(searchPage(query)),
    clearSearchPage: () => dispatch(clearSearchPage()),
    fetchEveryRecipe: () => dispatch(fetchEveryRecipe()),
})

export default connect(mapSTP, mapDTP)(SearchRecipes);
