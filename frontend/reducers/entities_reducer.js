import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
    users: UsersReducer,
})