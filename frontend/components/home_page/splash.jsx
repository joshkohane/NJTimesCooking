import React from 'react'

const Splash = ({recipe}) => {
    return (
        <div className="splash-container" >
            <img className="splash-image" src={window.egg_sandwich} alt="" />
            <p className="recipe-otd" >Recipe <br />of the day</p>
            <div className="splash-recipe">
                <h1 className="splash-title" >Egg Sandwich with Tomato Jam</h1>
                <p className="splash-description" >A delicious twist on a Jersey classic.</p>
                <p className="splash-author" >Julie Scelfo</p>
            </div>
            <button className="save-recipe-btn">
                <div className="splash-outer-bookmark">
                    <div className="splash-bookmark"></div>
                </div>
                    {/* <i class="far fa-bookmark" ></i> */}
                Save To Recipe Box
            </button>
        </div>
    )
}

export default Splash;