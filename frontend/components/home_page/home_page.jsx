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
    }

    render() {
        let { recipes } = this.props
        return (
            <div className="main-app" >
                <Link to="/" style={{ textDecoration: 'none' }}>
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
                            {recipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} /> )}
                            {recipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} />)}
                        </ul>
                    </div>
                    <div className="recipe-card-header">
                        <h1 className="recipe-card-header-title" >Recipes We Think You'll Love</h1>
                        <h2 className="recipe-card-header-subtitle" >Some of our moves popular dishes.</h2>
                    </div>
                    <div className="recipe-card-container">
                        <ul className="recipe-card" >
                            {recipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} />)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;