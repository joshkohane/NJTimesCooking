import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './recipe_card';
import Splash from './splash';
import SplashContainer from './splash_container'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topLeft: 0,
            topIdx: 0,
            bottomLeft: 0,
            bottomIdx: 0,
        }
        this.moveTopCarouselLeft = this.moveTopCarouselLeft.bind(this);
        this.moveTopCarouselRight = this.moveTopCarouselRight.bind(this);
        this.moveBottomCarouselLeft = this.moveBottomCarouselLeft.bind(this);
        this.moveBottomCarouselRight = this.moveBottomCarouselRight.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        this.props.fetchEveryRecipe();
        this.props.closeModal();
    }

    moveTopCarouselLeft(e) {
        e.preventDefault();
        let currentPosition = this.state.topLeft
        let currentIdx = this.state.topIdx
        this.setState({ topLeft: currentPosition - 764, topIdx: currentIdx + 4 })
    }

    moveTopCarouselRight(e) {
        e.preventDefault();
        let currentPosition = this.state.topLeft
        let currentIdx = this.state.topIdx
        this.setState({ topLeft: currentPosition + 764, topIdx: currentIdx - 4 })
    }

    moveBottomCarouselLeft(e) {
        e.preventDefault();
        let currentPosition = this.state.bottomLeft
        let currentIdx = this.state.bottomIdx
        this.setState({ bottomLeft: currentPosition - 764, bottomIdx: currentIdx + 4 })
    }

    moveBottomCarouselRight(e) {
        e.preventDefault();
        let currentPosition = this.state.bottomLeft
        let currentIdx = this.state.bottomIdx
        this.setState({ bottomLeft: currentPosition + 764, bottomIdx: currentIdx - 4 })
    }

    handleSave(splashRecipe) {
        // e.stopPropagation();
        // debugger;
        if (splashRecipe.saveId) {
            this.props.deleteThisSave(splashRecipe.saveId)
        } else {
            this.props.saveThisRecipe(splashRecipe.id)
        }
    }

    render() {
        let { recipes, splashRecipe, suggestedRecipes, lovedRecipes, isModalOpen, saveThisRecipe, deleteThisSave } = this.props
        if (!splashRecipe) return null;
        let topLeft = this.state.topLeft === 0 ? 'none' : '';
        let topRight = this.state.topIdx === 8 ? 'none' : '';
        let bottomLeft = this.state.bottomLeft === 0 ? 'none' : '';
        let bottomRight = this.state.bottomIdx === 8 ? 'none' : '';
        let action = splashRecipe.saveId ? deleteThisSave : saveThisRecipe

        // debugger;
        // console.log(splashRecipe)
        // console.log(suggestedRecipes)
        // let splashId = 0;
        // recipes.forEach(recipe => recipe.title === 'Pizza Margherita' ? splashId = recipe.id : '' )
        return (
            <div className="main-app" >
                <div className="splash-outer-container" >
                    <Link to={`/api/recipes/${splashRecipe.id}`} style={{ textDecoration: 'none' }}>
                        <Splash recipe={splashRecipe} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} />
                    </Link>
                    <button className="save-recipe-btn" onClick={() => this.handleSave(splashRecipe)}>
                        <div className="splash-outer-bookmark">
                            <div className={splashRecipe.saveId ? "splash-bookmark splash-bookmark-saved" : "splash-bookmark"} ></div>
                            {/* <div className={splashRecipe.saveId ? "splash-bookmark" : "splash-bookmark"}></div> */}
                            {/* <i class="far fa-bookmark" ></i> */}
                            <p className="splash-bookmark-text" >{splashRecipe.saveId ? "Saved" : "Save To Recipe Box"}</p>
                        </div>
                    </button>
                </div>
                <div className="home-page-main-body">
                    <div className="home-page-header">
                        <h1 className="home-page-title">What to Cook This Week</h1>
                        <h2 className="home-page-subtitle">Recipes, guides and more</h2>
                    </div>
                    <div className="home-page-recipe-card-container" >
                        <div className="recipe-card-header" >
                            <h1 className="recipe-card-header-title" >Suggestions</h1>
                            <h2 className="recipe-card-header-subtitle" >Recipes selected by the editor for cooking this week.</h2>
                        </div>
                        <div className="recipe-card-container">
                            <div className="recipe-card-overflow-left" style={{ display: topLeft }} ><i onClick={this.moveTopCarouselRight} className="fas fa-chevron-left"></i></div>
                            <div className="recipe-card-extra-overflow-left"></div>
                            <ul className="recipe-card" style={{ left: this.state.topLeft + 'px' }} >
                            {/* <ul className="recipe-card" style={{ left: '-1528px' }} > */}
                                {suggestedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave}/> )}
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <div className="see-all-link-wrapper">
                                        <div className="see-all-link" >See all recipes</div>
                                    </div>
                                </Link>
                            </ul>
                            <div className="recipe-card-overflow" style={{ display: topRight }} ><i onClick={this.moveTopCarouselLeft} className="fas fa-chevron-right"></i></div>
                            <div className="recipe-card-extra-overflow"></div>
                        </div>
                    </div>
                    <div className="home-page-recipe-card-container" >
                        <div className="recipe-card-header" >
                            <h1 className="recipe-card-header-title" >Recipes We Think You'll Love</h1>
                            <h2 className="recipe-card-header-subtitle" >Some of our most popular dishes.</h2>
                        </div>
                        <div className="recipe-card-container">
                            <div className="recipe-card-overflow-left" style={{ display: bottomLeft }} ><i onClick={this.moveBottomCarouselRight} className="fas fa-chevron-left"></i></div>
                            <div className="recipe-card-extra-overflow-left"></div>
                            <ul className="recipe-card" style={{ left: this.state.bottomLeft + 'px' }} >
                                {lovedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} />)}
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <div className="see-all-link-wrapper">
                                        <div className="see-all-link" >See all recipes</div>
                                    </div>
                                </Link>
                            </ul>
                            <div className="recipe-card-overflow" style={{ display: bottomRight }} ><i onClick={this.moveBottomCarouselLeft} className="fas fa-chevron-right"></i></div>
                            <div className="recipe-card-extra-overflow"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;