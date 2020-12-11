import React from 'react'

class RecipePage extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.fetchOneRecipe(this.props.match.params.recipeId)
        const recipe = this.props.recipe
        // debugger;
    }

    render() {
        let { recipe, ingredients, ingredientLists, author } = this.props
        console.log(recipe)
        console.log(ingredients)
        console.log(ingredientLists)
        console.log(author)


        if (!recipe) return null;
        return (
            <div>
                <p>{recipe.title}</p>
                <p>By {recipe.authorFirstName} {recipe.authorLastName}</p>
                <p>Yield {recipe.yield}</p>
                <p>Time {recipe.time}</p>
                <p>{recipe.description}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>

            </div>
        )
    }
}

export default RecipePage