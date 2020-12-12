import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './recipe_card';
import Splash from './splash';
import SplashContainer from './splash_container'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEveryRecipe();
        this.props.closeModal();
    }

    render() {
        let { recipes, splashRecipe, suggestedRecipes, lovedRecipes, isModalOpen } = this.props
        if (!splashRecipe) return null;
        // debugger;
        // console.log(splashRecipe)
        // console.log(suggestedRecipes)
        // let splashId = 0;
        // recipes.forEach(recipe => recipe.title === 'Pizza Margherita' ? splashId = recipe.id : '' )
        return (
            <div className="main-app" >
                <Link to={`/api/recipes/${splashRecipe.id}`} style={{ textDecoration: 'none' }}>
                    <Splash />
                </Link>
                <div className="home-page-main-body">
                    <div className="home-page-header">
                        <h1 className="home-page-title">What to Cook This Week</h1>
                        <h2 className="home-page-subtitle">Recipes, guides and more</h2>
                    </div>
                    <div className="recipe-card-header">
                        <h1 className="recipe-card-header-title" >Suggestions</h1>
                        <h2 className="recipe-card-header-subtitle" >Recipes selected by the editor for cooking this week.</h2>
                    </div>
                    <div className="recipe-card-container">
                        <ul className="recipe-card" >
                            {suggestedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} /> )}
                            {suggestedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} />)}
                        </ul>
                    </div>
                    <div className="recipe-card-header">
                        <h1 className="recipe-card-header-title" >Recipes We Think You'll Love</h1>
                        <h2 className="recipe-card-header-subtitle" >Some of our most popular dishes.</h2>
                    </div>
                    <div className="recipe-card-container">
                        <ul className="recipe-card" >
                            {lovedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} />)}
                            {lovedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} />)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;