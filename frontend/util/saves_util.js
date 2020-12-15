export const saveRecipe = (recipeId) => (
    $.ajax({
        url: `/api/recipes/${recipeId}/saves`,
        method: 'POST',
        // data: { userId }
    })
)

export const deleteSave = (saveId) => (
    $.ajax({
        url: `/api/saves/${saveId}`,
        method: 'DELETE'
    })
)