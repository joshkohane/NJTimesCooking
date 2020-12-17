import React from 'react'

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { recipe } = this.props
        return (
            <div className="splash-container" >
                <img className="splash-image" src={recipe.photoUrl} alt="" />
                <p className="recipe-otd" >Recipe <br />of the day</p>
                <div className="splash-recipe">
                    <h1 className="splash-title" >{recipe.title}</h1>
                    <p className="splash-description" >A delicious twist on a Jersey classic.</p>
                    <p className="splash-author" >{recipe.authorFirstName} {recipe.authorLastName}</p>
                </div>
            </div>
        )
    }
}

export default Splash;