import React from 'react'
import Directions from './directions';

class RecipePage extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.fetchOneRecipe(this.props.match.params.recipeId)
        const recipe = this.props.recipe
        // debugger;
    }

    render() {
        let { recipe, ingredients, ingredientLists, author } = this.props
        if (!recipe) return null;
        console.log(recipe.directions)
        console.log(ingredients)
        console.log(ingredientLists)
        console.log(author)


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
                    <div className="ingredients-container">
                        <h1 className="directions-header" >Ingredients</h1>
                    </div>
                    <div className="directions-container">
                        <h1 className="directions-header" >Preparation</h1>
                        {recipe.directions.map((direction, idx) => <Directions direction={direction} idx={idx} key={idx} /> )}
                        {recipe.tip ? 
                            <div>
                                <h1>Tip</h1>
                                <p>{recipe.tip}</p>
                            </div>
                        : ''}
                    </div>

                </div>
            </div>
        )
    }
}

export default RecipePage