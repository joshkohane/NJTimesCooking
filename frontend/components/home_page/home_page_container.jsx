import HomePage from './home_page';
import { connect } from 'react-redux';
import { fetchEveryRecipe, fetchOneRecipe } from '../../actions/recipe_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';
import { selectSplashRecipe, selectSuggested, selectLoved } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearSearch } from '../../actions/recipe_actions';

const mapSTP = state => ({
    suggestedRecipes: selectSuggested(state),
    lovedRecipes: selectLoved(state),
    splashRecipe: selectSplashRecipe(state),
    loggedIn: Boolean(state.session.currentUser),
})

const mapDTP = dispatch => ({
    fetchEveryRecipe: () => dispatch(fetchEveryRecipe()),
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
    closeModal: () => dispatch(closeModal()),
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    clearSearch: () => dispatch(clearSearch()),
})

export default connect(mapSTP, mapDTP)(HomePage);