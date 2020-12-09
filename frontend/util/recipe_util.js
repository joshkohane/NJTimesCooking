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

export const fetchAuthor = (authorId) => {
// debugger
        return $.ajax({
            url: `/api/users/${authorId}`
        })
}
