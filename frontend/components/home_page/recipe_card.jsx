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
                <Link to={`/api/recipes/${recipe.id}`} style={{ textDecoration: 'none' }} >
                    <div className="recipe-card-wrapper" >
                        <img className="recipe-card-photo" src={recipe.photoUrl} alt="" />
                        <div className="recipe-card-text" >
                            <li className="recipe-card-title" >{recipe.title}</li>
                            <li className="recipe-card-name">{recipe.authorFirstName} {recipe.authorLastName}</li>
                        </div>
                        <div className="recipe-card-footer">
                            <li className="recipe-card-time" >{recipe.time}</li>
                            {/* <i class="far fa-bookmark recipe-card-bookmark" ></i>
                                                    <i class="fas fa-bookmark recipe-card-bookmark-dark"></i> */}
                        </div>
                    </div>
                </Link>
                <div className="recipe-card-bookmark-container"  onClick={() => this.handleSave(recipe)} >
                {loggedIn ? '' :
                    <div className="recipe-card-pop-up" >
                        <div className="recipe-card-pop-up-spacer" ></div>
                        <div className="recipe-card-pop-up-text" >
                            <span onClick={() => this.props.openModal('login')} className="logged-in-pop-up-link" >Log in</span>
                            <p> or </p>
                            <span onClick={() => this.props.openModal('signup')} className="logged-in-pop-up-link" >Sign up</span>
                                            to save this recipe.
                        </div>
                    </div>
                }
                    <div className={recipe.saveId ? "recipe-card-bookmark recipe-card-bookmark-saved" : "recipe-card-bookmark"} ></div>
                </div>
            </div>
        )
    }
}


export default RecipeCard