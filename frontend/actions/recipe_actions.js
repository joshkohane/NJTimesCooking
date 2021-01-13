import { fetchAllRecipes, fetchRecipe, searchRecipes } from '../util/recipe_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const RECEIVE_SEARCH_PAGE = 'RECEIVE_SEARCH_PAGE';
export const CLEAR_SEARCH_PAGE = 'CLEAR_SEARCH_PAGE';

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

export const clearSearch = () => ({
    type: CLEAR_SEARCH,
})

export const receiveSearchPage = (recipes) => ({
    type: RECEIVE_SEARCH_PAGE,
    recipes
})

export const clearSearchPage = () => ({
    type: CLEAR_SEARCH_PAGE,
})

export const fetchEveryRecipe = () => dispatch => fetchAllRecipes()
    .then(recipes => dispatch(receiveAllRecipes(recipes)))

export const fetchOneRecipe = (recipeId) => dispatch => fetchRecipe(recipeId)
    .then(recipe => dispatch(receiveRecipe(recipe)))

export const search = (query) => dispatch => searchRecipes(query)
    .then(recipes => dispatch(receiveSearch(recipes)))

export const searchPage = (query) => dispatch => searchRecipes(query)
    .then(recipes => dispatch(receiveSearchPage(recipes)))