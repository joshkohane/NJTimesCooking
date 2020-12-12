import React from 'react'
import { openModal } from '../../actions/modal_actions';
import Directions from './directions';
import IngredientLists from './ingredient_lists';

class RecipePage extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.fetchOneRecipe(this.props.match.params.recipeId)
        const recipe = this.props.recipe
        const list = this.props.ingredientLists
        // debugger;
    }
    
    render() {
        let { recipe, ingredients, ingredientLists, author, loggedIn, isModalOpen } = this.props
        // debugger;
        if (ingredientLists.length === 0 || !recipe) return null;
        { !loggedIn && !isModalOpen ? this.props.openModal('signup') : '' }
        // debugger;
        //  || (recipe.id && recipe.id.toString() !== this.props.match.params.recipeId)
        console.log(recipe)
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
                        {ingredientLists.map((list, idx) => <IngredientLists list={list} key={idx} /> )}
                    </div>
                    <div className="directions-container">
                        <h1 className="directions-header" >Preparation</h1>
                        {recipe.directions.map((direction, idx) => <Directions direction={direction} idx={idx} key={idx} /> )}
                        {recipe.tip ? 
                            <div>
                                <h1 className="direction-tip-header" >Tip</h1>
                                <p className="direction-tip" >{recipe.tip}</p>
                            </div>
                        : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePage