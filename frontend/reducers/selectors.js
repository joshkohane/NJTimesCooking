export const selectSplashRecipe = state => {
    let splashRecipe;
    // debugger;
    Object.values(state.entities.recipes).forEach(recipe => {
        if (recipe.id === 14) {
            splashRecipe = recipe;
        }
    })
    return splashRecipe;
}