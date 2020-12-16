import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { search, clearSearch } from '../../actions/recipe_actions';
import { withRouter } from 'react-router-dom';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';

const mapSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    searches: state.entities.search,
})

const mapDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    search: (query) => dispatch(search(query)),
    clearSearch: () => dispatch(clearSearch()),
    saveThisRecipe: (recipeId) => dispatch(saveThisRecipe(recipeId)),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
})

export default withRouter(connect(mapSTP, mapDTP)(NavBar));