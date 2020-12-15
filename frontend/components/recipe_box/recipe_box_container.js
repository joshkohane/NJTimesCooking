import RecipeBox from './recipe_box';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';
import { fetchThisUser } from '../../actions/user_actions';

const mapSTP = (state, ownProps) => {
    debugger;
    return {
    saves: Object.values(state.saves),
    loggedIn: Boolean(state.session.currentUser),
}}

const mapDTP = dispatch => ({
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchThisUser: (userId) => dispatch(fetchThisUser(userId)),
})

export default connect(mapSTP, mapDTP)(RecipeBox);
