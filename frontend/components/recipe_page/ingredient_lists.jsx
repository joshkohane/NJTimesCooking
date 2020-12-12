import React from 'react';
import Ingredients from './ingredients';

const IngredientLists = ({ list }) => {
    // debugger
    return (
        <div>
            <p>{list.header}</p>
            {Object.values(list.ingredients).map((ingredient, idx) => 
                <Ingredients ingredient={ingredient} key={idx} /> 
            )}
        </div>
    )
}

export default IngredientLists