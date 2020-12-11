import RecipePage from './recipe_page';
import { connect } from 'react-redux';
import { fetchOneRecipe } from '../../actions/recipe_actions';

const mapSTP = (state, ownProps) => {
    // debugger;
    return {
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    ingredients: state.entities.ingredients,
    ingredientLists: state.entities.ingredientLists,
    // author: state.entities.author,
}}

const mapDTP = dispatch => ({
    fetchOneRecipe: (recipeId) => dispatch(fetchOneRecipe(recipeId)),
})

export default connect(mapSTP, mapDTP)(RecipePage);