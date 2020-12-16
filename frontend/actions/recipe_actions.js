import { fetchAllRecipes, fetchRecipe, searchRecipes } from '../util/recipe_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveAllRecipes = (recipes) => ({
    type: RECEIVE_ALL_RECIPES,
    recipes
})

export const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
})

export const receiveSearch = (recipes) => ({
    type: RECEIVE_SEARCH,
    recipes
})

export const fetchEveryRecipe = () => dispatch => fetchAllRecipes()
    .then(recipes => dispatch(receiveAllRecipes(recipes)))

export const fetchOneRecipe = (recipeId) => dispatch => fetchRecipe(recipeId)
    .then(recipe => dispatch(receiveRecipe(recipe)))

export const search = (query) => dispatch => searchRecipes(query)
    .then(recipes => dispatch(receiveSearch(recipes)))