export const selectSplashRecipe = state => {
    let splashRecipe;
    Object.values(state.entities.recipes).forEach(recipe => {
        if (recipe.category.includes('splash')) {
            splashRecipe = recipe;
        }
    })
    return splashRecipe;
}

export const selectSuggested = state => {
    let suggested = []
    Object.values(state.entities.recipes).forEach(recipe => {
        if (recipe.category.includes('suggestions')) {
            suggested.push(recipe);
        }
    })
    return suggested;
}

export const selectLoved = state => {
    let loved = []
    Object.values(state.entities.recipes).forEach(recipe => {
        if (recipe.category.includes('love')) {
            loved.push(recipe);
        }
    })
    return loved;
}