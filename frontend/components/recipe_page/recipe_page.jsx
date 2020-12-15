import React from 'react'
import { openModal } from '../../actions/modal_actions';
import Directions from './directions';
import IngredientLists from './ingredient_lists';
import { Link } from 'react-router-dom';

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "modal-save-background-closed"
        }
        this.handleSave = this.handleSave.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
    }
    
    componentDidMount() {
        // debugger;
        this.props.fetchOneRecipe(this.props.match.params.recipeId)
        const recipe = this.props.recipe
        const list = this.props.ingredientLists
        // debugger;
    }

    handleSave(recipe) {
        // e.stopPropagation();
        // debugger;
        if (recipe.saveId) {
            this.toggleModal();
        } else {
            this.props.saveThisRecipe(recipe.id);
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
        let { recipe, ingredients, ingredientLists, author, loggedIn, openModal, isModalOpen } = this.props
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
                    <div className="outer-bookmark">
                        <button className="save-recipe-btn recipe-page-btn" onClick={() => this.handleSave(recipe)} >
                            <div className="splash-outer-bookmark bookmark-outer-recipe">
                                {/* {splashRecipe.saveId ? "splash-bookmark bookmark-recipe splash-bookmark-saved" : "splash-bookmark bookmark-recipe"} */}
                                <div className={recipe.saveId ? "splash-bookmark bookmark-recipe bookmark-recipe-saved" : "splash-bookmark bookmark-recipe"}></div>
                            </div>
                            <p className="splash-bookmark-text" >{recipe.saveId ? "Saved" : "Save To Recipe Box"}</p>
                        </button>
                    </div>
                    <div className={this.state.className} onClick={this.toggleModal} >
                        <div className="modal-save-child" onClick={e => e.stopPropagation()}>
                            <span className="close-modal-btn" onClick={this.toggleModal} >&#x2715;</span>
                            <div className="modal-save-body">
                                <p className="modal-image-text">Are you sure you want to remove <span className="modal-save-title" >{recipe.title}</span> from your recipe box?</p>
                                <div className="modal-save-btns">
                                    <button type="button" onClick={this.toggleModal} className="modal-save-no">NO</button>
                                    <button type="button" onClick={() => this.clickEvent(recipe)} className="modal-save-yes">YES</button>
                                </div>
                            </div>
                        </div>
                    </div>
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