import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/api/recipes/${recipe.id}`} style={{ textDecoration: 'none' }} >
            <div className="recipe-card-wrapper" >
                <img className="recipe-card-photo" src={recipe.photoUrl} alt="" />
                <div className="recipe-card-text" >
                    <li className="recipe-card-title" >{recipe.title}</li>
                    <li className="recipe-card-name">{recipe.authorFirstName} {recipe.authorLastName}</li>
                </div>
                <div className="recipe-card-footer">
                    <li className="recipe-card-time" >{recipe.time}</li>
                    <div className="recipe-card-bookmark-container" >
                        <li className="recipe-card-bookmark" ></li>
                    </div>
                    {/* <i class="far fa-bookmark recipe-card-bookmark" ></i>
                                            <i class="fas fa-bookmark recipe-card-bookmark-dark"></i> */}
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard