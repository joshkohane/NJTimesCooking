import React from 'react';
import RecipeCard from '../home_page/recipe_card';
import { Redirect } from 'react-router-dom';

class RecipeBox extends React.Component {
    componentDidMount() {
        this.props.fetchEveryRecipe();
        this.props.fetchThisUser(parseInt(this.props.match.params.userId));
        this.props.clearSearch();
        window.scrollTo(0, 0);
        // debugger;
    }

    render() {
        // debugger;
        let { saves, recipes, saveThisRecipe, deleteThisSave, loggedIn, openModal, isModalOpen } = this.props
        { !loggedIn && !isModalOpen ? openModal('signup') : '' }
        if (Object.keys(recipes).length === 0) return <div className="no-search-results"></div>;
        // console.log(recipes)
        // debugger;

        return (
            <div className="recipe-box-outer-container" >
                <div className="recipe-box-container" >
                    <h1 className="recipe-box-title" >Saved Recipes</h1>
                    <h2 className="recipe-box-subtitle" >{saves.length} recipes</h2>
                    {saves.length === 0 ? <div className="no-search-results"></div> :
                        <div className="recipe-box-recipes-container">
                            {this.props.saves.map((save, idx) => {
                                let saveId = save.recipeId
                                let recipe = recipes[saveId]
                                return <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} loggedIn={loggedIn} openModal={openModal} />
                            }
                            )}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default RecipeBox;