import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login, resetErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    errors: state.errors,
    loggedIn: state.session.currentUser,
    formType: 'signup',
    location: window.location.hash,
})

const mapDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    action: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors()),
})

export default connect(mapSTP, mapDTP)(SessionForm);