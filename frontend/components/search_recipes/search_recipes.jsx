import React from 'react'
import RecipeCard from '../home_page/recipe_card';

class SearchRecipes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searches: this.props.history.location.state.theseSearches
        }
    }

    componentDidMount() {
        // this.props.search(this.props.match.params.query)
        this.props.clearSearch();
        // debugger;
        // this.props.clearSearch();
    }

    componentDidUpdate(prevProps) {
        // debugger;
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.clearSearch();
            this.setState({ searches: this.props.history.location.state.theseSearches });
        }
        // debugger;
    }

    render() {
        let { theseSearches, saveThisRecipe, deleteThisSave, loggedIn, openModal, isModalOpen } = this.props.history.location.state
        // Object.freeze(theseSearches)
        // debugger;
        if (theseSearches.length === 0) return (
            <div className="no-search-results">
                <h1 className="no-search-results-heading">No recipe results for "{this.props.match.params.query}"</h1>
                <h1 className="no-search-results-subheading">Search again for other recipes</h1>
            </div>

        );
        const thisSearch = Object.assign([], theseSearches)

        return (
            <div className="recipe-box-outer-container" >

                <div className="recipe-box-container" >
                    <h1 className="recipe-box-title" >All Recipes</h1>
                    <h2 className="recipe-box-subtitle" >{thisSearch.length} recipes</h2>
                    <div className="recipe-box-recipes-container">
                        {this.state.searches.map((recipe, idx) => {
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