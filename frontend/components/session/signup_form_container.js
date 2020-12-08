import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapSTP = state => ({
    errors: state.errors,
})

const mapDTP = dispatch => ({
    signup: (user) => dispatch(signup(user))
})

export default connect(mapSTP, mapDTP)(SignupForm);