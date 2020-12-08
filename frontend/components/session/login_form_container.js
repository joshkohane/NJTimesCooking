import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapSTP = state => ({
    errors: state.errors,
})

const mapDTP = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(LoginForm);