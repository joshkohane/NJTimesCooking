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
            <div>
                <h1>This is the NJTimesCooking Home Page!!</h1>
                {/* <ul>
                    <li>
                        {splashRecipe.title}
                    </li>
                </ul> */}
                {/* <SplashContainer recipe={splashRecipe} /> */}
                {/* <SplashContainer /> */}
                <ul>
                    {recipes.map((recipe, idx) => (
                        <li key={idx}>{recipe.title} {recipe.authorFirstName} {recipe.authorLastName}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default HomePage;