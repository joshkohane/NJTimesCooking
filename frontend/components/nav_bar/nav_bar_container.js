import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { search, clearSearch } from '../../actions/recipe_actions';

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
})

export default connect(mapSTP, mapDTP)(NavBar);