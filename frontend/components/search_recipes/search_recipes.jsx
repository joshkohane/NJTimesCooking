import React from 'react'
import RecipeCard from '../home_page/recipe_card';

class SearchRecipes extends React.Component {
    componentDidMount() {
        this.props.search(this.props.match.params.query)
    }

    render() {
        let { searches, saveThisRecipe, deleteThisSave, loggedIn, openModal, isModalOpen } = this.props
        // debugger;
        // Object.freeze(searches)
        if (searches.length === 0) return null;
        const thisSearch = Object.assign([], searches)

        return (
            <div className="recipe-box-outer-container" >
                <div className="recipe-box-container" >
                    <h1 className="recipe-box-title" >All Recipes</h1>
                    <h2 className="recipe-box-subtitle" >{thisSearch.length} recipes</h2>
                    <div className="recipe-box-recipes-container">
                        {thisSearch.map((recipe, idx) => {
                            return <RecipeCard recipe={recipe} key={idx} saveThisRecipe={saveThisRecipe} deleteThisSave={deleteThisSave} loggedIn={loggedIn} openModal={openModal} />
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchRecipes