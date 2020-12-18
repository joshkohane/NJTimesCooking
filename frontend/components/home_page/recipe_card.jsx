import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "modal-save-background-closed"
        }
        this.handleSave = this.handleSave.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
    }

    handleSave(recipe) {
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
        let { recipe, loggedIn, openModal } = this.props;
        return (
            <div className="recipe-card-outer-container" >
                <div className="recipe-card-wrapper" >
                    <Link to={`/api/recipes/${recipe.id}`} style={{ textDecoration: 'none' }} >
                        <img className="recipe-card-photo" src={recipe.photoUrl} alt="" />
                        <div className="recipe-card-text" >
                            <p className="recipe-card-title" >{recipe.title}</p>
                            <p className="recipe-card-name">{recipe.authorFirstName} {recipe.authorLastName}</p>
                        </div>
                        <div className="recipe-card-footer">
                            <p className="recipe-card-time" >{recipe.time}</p>
                        </div>
                    </Link>
                    <div className="recipe-card-bookmark-container"  onClick={loggedIn ? () => this.handleSave(recipe): () => {}} >
                    {loggedIn ? '' :
                        <div className="recipe-card-pop-up" >
                            <div className="recipe-card-pop-up-spacer" ></div>
                            <div className="recipe-card-pop-up-text" >
                                <span onClick={() => openModal('login')} className="logged-in-pop-up-link" >Log in</span>
                                <p> or </p>
                                <span onClick={() => openModal('signup')} className="logged-in-pop-up-link" >Sign up</span>
                                to save this recipe.
                            </div>
                        </div>
                    }
                    {loggedIn ?
                        <div className={recipe.saveId ? "recipe-card-bookmark recipe-card-bookmark-saved" : "recipe-card-bookmark"} ></div>
                    :
                        <div className="recipe-card-bookmark" ></div>
                    }
                    </div>
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
            </div>
        )
    }
}

export default RecipeCard