import { fetchAllRecipes, fetchRecipe, fetchAuthor } from '../util/recipe_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';

export const receiveAllRecipes = (recipes) => ({
    type: RECEIVE_ALL_RECIPES,
    recipes
})

export const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
})

export const receiveAuthor = (author) => ({
    type: RECEIVE_AUTHOR,
    author
})

export const fetchEveryRecipe = () => dispatch => fetchAllRecipes()
    .then(recipes => dispatch(receiveAllRecipes(recipes)))

export const fetchOneRecipe = (recipeId) => dispatch => fetchRecipe(recipeId)
    .then(recipe => dispatch(receiveRecipe(recipe)))