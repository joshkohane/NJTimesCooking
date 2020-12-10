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