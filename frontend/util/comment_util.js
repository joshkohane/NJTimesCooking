export const addComment = (recipeId, text) => (
    $.ajax({
        url: `/api/recipes/${recipeId}/comments`,
        method: 'POST',
        data: { comment: { text } }
    })
)

export const deleteComment = (recipeId) => (
    $.ajax({
        url: `/api/comments/${recipeId}`,
        method: 'DELETE'
    })
)