import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
})

const mapDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapSTP, mapDTP)(NavBar);