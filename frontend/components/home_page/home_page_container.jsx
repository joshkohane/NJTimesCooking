import HomePage from './home_page';
import { connect } from 'react-redux';
import { fetchEveryRecipe, fetchOneRecipe } from '../../actions/recipe_actions';
import { selectSplashRecipe, selectSuggested, selectLoved } from '../../reducers/selectors';
import { closeModal } from '../../actions/modal_actions';

const mapSTP = state => {
    // debugger;
    return {
        recipes: Object.values(state.entities.recipes),
        suggestedRecipes: selectSuggested(state),
        lovedRecipes: selectLoved(state),
        splashRecipe: selectSplashRecipe(state),
        isModalOpen: !!state.ui.modal,
    }
}

const mapDTP = dispatch => ({
    fetchEveryRecipe: () => dispatch(fetchEveryRecipe()),
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapSTP, mapDTP)(HomePage);