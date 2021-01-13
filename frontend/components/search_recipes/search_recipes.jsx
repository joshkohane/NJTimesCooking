import React from 'react'
import RecipeCard from '../home_page/recipe_card';

class SearchRecipes extends React.Component {
    componentDidMount() {
        this.props.clearSearch();
        this.props.fetchEveryRecipe();
        this.props.searchPage(this.props.match.params.query);
        this.props.closeModal();
        window.scrollTo(0, 0);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.clearSearchPage();
            this.props.searchPage(this.props.match.params.query);
            window.scrollTo(0, 0);
        }
    }

    render() {
        let { saveThisRecipe, deleteThisSave, loggedIn, openModal, recipes, searches } = this.props
        if (Object.values(recipes).length === 0) return (<div className="no-search-results"></div>);

        if (searches.length === 0) return (
            <div className="no-search-results">
                <h1 className="no-search-results-heading">No recipe results for "{this.props.match.params.query}"</h1>
                <h1 className="no-search-results-subheading">Search again for other recipes</h1>
            </div>

        );

        return (
            <div className="recipe-box-outer-container" >

                <div className="recipe-box-container" >
                    <h1 className="recipe-box-title" >All Recipes</h1>
                    <h2 className="recipe-box-subtitle" >{searches.length} recipes</h2>
                    <div className="recipe-box-recipes-container">
                        {searches.map((search, idx) => {
                            let searchId = search.id
                            let recipe = recipes[searchId]
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