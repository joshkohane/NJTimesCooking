import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    errors: state.errors,
    loggedIn: state.session.currentUser
})

const mapDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapSTP, mapDTP)(SignupForm);