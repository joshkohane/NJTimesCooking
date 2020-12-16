import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import RecipesReducer from './recipes_reducer';
import IngredientListsReducer from './ingredient_lists_reducer';
import IngredientsReducer from './ingredients_reducer';
import SavesReducer from './saves_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
    users: UsersReducer,
    recipes: RecipesReducer,
    ingredientLists: IngredientListsReducer,
    ingredients: IngredientsReducer,
    saves: SavesReducer,
    search: SearchReducer
})