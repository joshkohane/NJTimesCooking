import React from 'react';
import Splash from './splash';
import SplashContainer from './splash_container'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEveryRecipe();
    }

    render() {
        let { recipes, splashRecipe } = this.props
        return (
            <div className="main-app" >
                <div className="splash-container" >
                    <img className="splash-image" src={window.egg_sandwich} alt=""/>
                    <p className="recipe-otd" >Recipe <br />of the day</p>
                    <div className="splash-recipe">
                        <h1 className="splash-title" >Egg Sandwich with Tomato Jam</h1>
                        <p className="splash-description" >A delicious twist on a Jersey classic.</p>
                        <p className="splash-author" >Julie Scelfo</p>
                    </div>
                    <button className="save-recipe-btn">
                        <div className="splash-outer-bookmark">
                            <div className="splash-bookmark"></div>
                            {/* <i class="far fa-bookmark" ></i> */}
                        </div>
                        Save To Recipe Box
                    </button>
                </div>
                <div className="home-page-main-body">
                    {/* <h1>This is the NJTimesCooking Home Page!!</h1> */}
                    {/* <ul>
                        <li>
                            {splashRecipe.title}
                        </li>
                    </ul> */}
                    {/* <SplashContainer recipe={splashRecipe} /> */}
                    {/* <SplashContainer /> */}
                    <div className="home-page-header">
                        <h1 className="home-page-title">What to Cook This Week</h1>
                        <h2 className="home-page-subtitle">Recipes, guides and more</h2>
                    </div>
                    <div className="recipe-card-header">
                        <h1 className="recipe-card-header-title" >Suggestions</h1>
                        <h2 className="recipe-card-header-subtitle" >Recipes selected by the editor for cooking this week.</h2>
                    </div>
                    <div className="recipe-card-container">
                        <ul className="recipe-card" >
                            {recipes.map((recipe, idx) => (
                                <div key={idx} className="recipe-card-wrapper" >
                                    <img className="recipe-card-photo" src={recipe.photoUrl} alt=""/>
                                    <div className="recipe-card-text" >
                                        <li className="recipe-card-title" >{recipe.title}</li>
                                        <li className="recipe-card-name">{recipe.authorFirstName} {recipe.authorLastName}</li> 
                                    </div>
                                    <div className="recipe-card-footer">
                                        <li className="recipe-card-time" >{recipe.time}</li>
                                        <div className="recipe-card-bookmark-container" >
                                            <li className="recipe-card-bookmark" ></li>
                                        </div>
                                        {/* <i class="far fa-bookmark recipe-card-bookmark" ></i>
                                        <i class="fas fa-bookmark recipe-card-bookmark-dark"></i> */}
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="recipe-card-header">
                        <h1 className="recipe-card-header-title" >Recipes We Think You'll Love</h1>
                        <h2 className="recipe-card-header-subtitle" >Some of our moves popular dishes.</h2>
                    </div>
                    <div className="recipe-card-container">
                        <ul className="recipe-card" >
                            {recipes.map((recipe, idx) => (
                                <div key={idx} className="recipe-card-wrapper" >
                                    <img className="recipe-card-photo" src={recipe.photoUrl} alt="" />
                                    <div className="recipe-card-text" >
                                        <li className="recipe-card-title" >{recipe.title}</li>
                                        <li className="recipe-card-name">{recipe.authorFirstName} {recipe.authorLastName}</li>
                                    </div>
                                    <div className="recipe-card-footer">
                                        <li className="recipe-card-time" >{recipe.time}</li>
                                        <div className="recipe-card-bookmark-container" >
                                            <li className="recipe-card-bookmark" ></li>
                                        </div>
                                        {/* <i class="far fa-bookmark recipe-card-bookmark" ></i>
                                        <i class="fas fa-bookmark recipe-card-bookmark-dark"></i> */}
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;