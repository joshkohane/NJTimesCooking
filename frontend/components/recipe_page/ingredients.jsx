import React from 'react';

const Ingredients = ({ ingredient }) => {
    return (
        <div className="ingredient-inner-container" >
            <span className="ingredient-amount" >{ingredient.amount}</span>
            <p className="ingredient-text" >{ingredient.unit} {ingredient.item}</p>
        </div>
    )
}

export default Ingredients;