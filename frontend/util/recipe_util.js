export const fetchAllRecipes = () => (
    $.ajax({
        url: `/api/recipes`
    })
)

export const fetchRecipe = (recipeId) => (
    $.ajax({
        url: `/api/recipes/${recipeId}`
    })
)

export const searchRecipes = (query) => (
    $.ajax({
        url: `/api/search/${query}`
    })
)