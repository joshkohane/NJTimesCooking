import React from 'react'

class RecipePage extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.fetchOneRecipe(this.props.match.params.recipeId)
        const recipe = this.props.recipe
        window.localStorage.setItem('recipe', JSON.stringify(recipe))
    }

    render() {
        let { recipe } = this.props
        return (
            <div>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
                <p>{recipe.title}</p>
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