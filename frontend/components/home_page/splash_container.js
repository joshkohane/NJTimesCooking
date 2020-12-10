import Splash from './splash';
import { connect } from 'react-redux';
import { fetchEveryRecipe, fetchOneRecipe } from '../../actions/recipe_actions';
import { selectSplashRecipe } from '../../reducers/selectors';

const mapSTP = state => {
    // debugger;
    return {

        // recipes: Object.values(state.entities.recipes),
        splashRecipe: selectSplashRecipe(state),
    }
}

const mapDTP = dispatch => ({
    fetchEveryRecipe: () => dispatch(fetchEveryRecipe()),
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
})

export default connect(mapSTP, mapDTP)(Splash);