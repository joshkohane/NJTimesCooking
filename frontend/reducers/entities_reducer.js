import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import RecipesReducer from './recipes_reducer';

export default combineReducers({
    users: UsersReducer,
    recipes: RecipesReducer
})