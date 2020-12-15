import React from 'react';
import RecipeCard from '../home_page/recipe_card';

class RecipeBox extends React.Component {
    componentDidMount() {
        this.props.fetchThisUser(parseInt(this.props.match.params.userId))
        // debugger;
    }

    render() {
        // debugger;
        let { saves, saveThisRecipe, deleteThisSave, loggedIn, openModal } = this.props
        debugger;
        if (!saves) return null;
        return (
            <div>
                {this.props.saves.map((recipe, idx) => (
                    <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} loggedIn={loggedIn} openModal={openModal} />
                ))}
            </div>
        )
    }
}

export default RecipeBox;