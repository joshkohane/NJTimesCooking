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
            <div className="recipe-page-outer-container" >
                <div className="recipe-page-container" >
                    <div className="spacer"></div>
                    <p className="recipe-page-title" >{recipe.title}</p>
                    <p className="recipe-page-author" >By <span className="recipe-page-author-name" >{recipe.authorFirstName} {recipe.authorLastName}</span></p>
                    <div className="recipe-page-label" >
                        <p className="recipe-page-subheader" >Yield</p>
                        <p className="recipe-page-yield" >{recipe.yield}</p>
                    </div>
                    <div className="recipe-page-label" >
                        <p className="recipe-page-subheader" >Time</p>
                        <p className="recipe-page-yield" >{recipe.time}</p>
                    </div>
                    <div className="recipe-page-splash" >
                        <p className="recipe-page-description" >{recipe.description}</p>
                        <img className="recipe-page-photo" src={recipe.photoUrl} alt="" />
                    </div>
                    <button className="save-recipe-btn recipe-page-btn">
                        <div className="splash-outer-bookmark bookmark-outer-recipe">
                            <div className="splash-bookmark bookmark-recipe"></div>
                        </div>
                        Save To Recipe Box
                    </button>
                </div>
                <div className="directions-outer-container">

                </div>
            </div>
        )
    }
}

export default RecipePage