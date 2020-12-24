import React from 'react'
import RecipeCard from '../home_page/recipe_card';

class SearchRecipes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searches: JSON.parse(localStorage.getItem('theseSearches')),
        }
    }

    componentDidMount() {
        this.props.clearSearch();
        this.props.closeModal();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.clearSearch();
            this.setState({ searches: JSON.parse(localStorage.getItem('theseSearches'))});
            window.scrollTo(0, 0);
        }
    }

    // componentWillUnmount() {
    //     localStorage.removeItem('theseSearches');
    // }

    render() {
        let { saveThisRecipe, deleteThisSave, loggedIn, openModal } = this.props
        if (this.state.searches.length === 0) return (
            <div className="no-search-results">
                <h1 className="no-search-results-heading">No recipe results for "{this.props.match.params.query}"</h1>
                <h1 className="no-search-results-subheading">Search again for other recipes</h1>
            </div>

        );

        return (
            <div className="recipe-box-outer-container" >

                <div className="recipe-box-container" >
                    <h1 className="recipe-box-title" >All Recipes</h1>
                    <h2 className="recipe-box-subtitle" >{this.state.searches.length} recipes</h2>
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