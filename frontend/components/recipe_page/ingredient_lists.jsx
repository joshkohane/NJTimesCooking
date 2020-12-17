import React from 'react';
import Ingredients from './ingredients';

const IngredientLists = ({ list }) => {
    return (
        <div>
            {list.header === "Ingredients" ? '' :
                <p className="ingredient-list-header">{list.header}</p>
            }
            {Object.values(list.ingredients).map((ingredient, idx) => 
                <Ingredients ingredient={ingredient} key={idx} /> 
            )}
        </div>
    )
}

export default IngredientLists