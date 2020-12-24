import React from 'react';
import RecipeCard from '../home_page/recipe_card';

class AllRecipesPage extends React.Component {
    componentDidMount() {
        this.props.fetchEveryRecipe();
        this.props.clearSearch();
        this.props.closeModal();
        window.scrollTo(0, 0);
    }

    render() {
        let { recipes, saveThisRecipe, deleteThisSave, loggedIn, openModal, isModalOpen } = this.props
        // { !loggedIn && !isModalOpen ? openModal('signup') : '' }
        if (Object.keys(recipes).length === 0) return (<div className="no-search-results"></div>);
        
        return (
            <div className="recipe-box-outer-container" >
                <div className="recipe-box-container" >
                    <h1 className="recipe-box-title" >All Recipes</h1>
                    <h2 className="recipe-box-subtitle" >{Object.values(recipes).length} recipes</h2>
                    <div className="recipe-box-recipes-container">
                        {Object.values(recipes).map((recipe, idx) => {
                            return <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} loggedIn={loggedIn} openModal={openModal} />
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllRecipesPage;