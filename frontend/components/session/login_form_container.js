import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    errors: state.errors,
    loggedIn: state.session.currentUser,
    formType: 'login',
})

const mapDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    action: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapSTP, mapDTP)(SessionForm);