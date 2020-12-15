import SaveModal from './save_modal';
import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';

const mapSTP = state => ({
    errors: state.errors,
    loggedIn: state.session.currentUser,
    formType: 'login',
    location: window.location.hash,
})

const mapDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    action: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
    deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
})

export default connect(mapSTP, mapDTP)(SaveModal);