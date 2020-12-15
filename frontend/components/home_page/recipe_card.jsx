import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(recipe) {
        if (recipe.saveId) {
            this.props.deleteThisSave(recipe.saveId)
        } else {
            this.props.saveThisRecipe(recipe.id)
        }
    }

    render() {
        let { recipe,loggedIn, openModal } = this.props;
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
                            {/* <i class="far fa-bookmark recipe-card-bookmark" ></i>
                                                    <i class="fas fa-bookmark recipe-card-bookmark-dark"></i> */}
                        </div>
                    </Link>
                    <div className="recipe-card-bookmark-container"  onClick={() => this.handleSave(recipe)} >
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
                    <div className={recipe.saveId ? "recipe-card-bookmark recipe-card-bookmark-saved" : "recipe-card-bookmark"} ></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default RecipeCard