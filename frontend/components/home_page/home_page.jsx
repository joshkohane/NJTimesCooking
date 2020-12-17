import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './recipe_card';
import Splash from './splash';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topLeft: 0,
            topIdx: 0,
            bottomLeft: 0,
            bottomIdx: 0,
            className: "modal-save-background-closed"
        }
        this.moveTopCarouselLeft = this.moveTopCarouselLeft.bind(this);
        this.moveTopCarouselRight = this.moveTopCarouselRight.bind(this);
        this.moveBottomCarouselLeft = this.moveBottomCarouselLeft.bind(this);
        this.moveBottomCarouselRight = this.moveBottomCarouselRight.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
    }

    componentDidMount() {
        this.props.fetchEveryRecipe();
        this.props.closeModal();
        this.props.clearSearch();
        window.scrollTo(0, 0);
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
        if (splashRecipe.saveId) {
            this.toggleModal();
        } else {
            this.props.saveThisRecipe(splashRecipe.id);
        }
    }

    toggleModal() {
        let newName = (this.state.className === "modal-save-background") ? "modal-save-background-closed" : "modal-save-background"
        this.setState({ className: newName })
    }

    clickEvent(recipe) {
        this.props.deleteThisSave(recipe.saveId);
        this.toggleModal();
    }

    render() {
        let { splashRecipe, suggestedRecipes, lovedRecipes, openModal, saveThisRecipe, deleteThisSave, loggedIn } = this.props
        if (!splashRecipe) return (<div className="no-search-results"></div>);
        let topLeft = this.state.topLeft === 0 ? 'none' : '';
        let topRight = this.state.topIdx === 8 ? 'none' : '';
        let bottomLeft = this.state.bottomLeft === 0 ? 'none' : '';
        let bottomRight = this.state.bottomIdx === 8 ? 'none' : '';

        return (
            <div className="main-app" >
                <div className="splash-outer-container" >
                    <Link to={`/api/recipes/${splashRecipe.id}`} style={{ textDecoration: 'none' }}>
                        <Splash recipe={splashRecipe} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} />
                    </Link>
                    <button className="save-recipe-btn" >
                        <div className="splash-outer-bookmark" onClick={loggedIn ? () => this.handleSave(splashRecipe) : () => openModal('login') }>
                            {loggedIn ? 
                                <div className={splashRecipe.saveId ? "splash-bookmark splash-bookmark-saved" : "splash-bookmark"} ></div>
                            :
                                <div className="splash-bookmark" ></div>
                            }
                            {loggedIn ? 
                                <p className="splash-bookmark-text" >{splashRecipe.saveId ? "Saved" : "Save To Recipe Box"}</p>
                            :
                                <p className="splash-bookmark-text" >Save To Recipe Box</p>
                            }
                        </div>
                    { loggedIn ? '' :
                        <div className="logged-in-pop-up" >
                            <div className="logged-in-pop-up-spacer" ></div>
                            <h1 className="logged-in-pop-up-title" >Build Your Recipe Box</h1>
                            <p className="logged-in-pop-up-body" >Save your favorite recipes in one place</p>
                            <div className="logged-in-pop-up-text" >
                                <span onClick={() => this.props.openModal('login')} className="logged-in-pop-up-link" >Log in</span>
                                <p> or </p>
                                <span onClick={() => this.props.openModal('signup')} className="logged-in-pop-up-link" >Sign up</span>
                                to save this recipe.
                            </div>
                        </div>
                    }
                    </button>
                </div>
                <div className={this.state.className} onClick={this.toggleModal} >
                    <div className="modal-save-child" onClick={e => e.stopPropagation()}>
                        <span className="close-modal-btn" onClick={this.toggleModal} >&#x2715;</span>
                        <div className="modal-save-body">
                            <p className="modal-image-text">Are you sure you want to remove <span className="modal-save-title" >{splashRecipe.title}</span> from your recipe box?</p>
                            <div className="modal-save-btns">
                                <button type="button" onClick={this.toggleModal} className="modal-save-no">NO</button>
                                <button type="button" onClick={() => this.clickEvent(splashRecipe)} className="modal-save-yes">YES</button>
                            </div>
                        </div>
                    </div>
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
                                {suggestedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} loggedIn={loggedIn} openModal={this.props.openModal} /> )}
                                <Link to={`/api/recipes/`} style={{ textDecoration: 'none' }}>
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
                                {lovedRecipes.map((recipe, idx) => <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} loggedIn={loggedIn} openModal={this.props.openModal} />)}
                                <Link to={`/api/recipes/`} style={{ textDecoration: 'none' }}>
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