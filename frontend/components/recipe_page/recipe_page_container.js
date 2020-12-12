import RecipePage from './recipe_page';
import { connect } from 'react-redux';
import { fetchOneRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';

const mapSTP = (state, ownProps) => {
    // debugger;
    return {
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    // ingredients: state.entities.ingredients,
    ingredientLists: Object.values(state.entities.ingredientLists),
    loggedIn: state.session.currentUser,
    // author: state.entities.author,
}}

const mapDTP = dispatch => ({
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mapSTP, mapDTP)(RecipePage);