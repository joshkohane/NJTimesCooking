import React from 'react'

const Directions = ({ direction, idx }) => {
    return (
        <div className="direction-wrapper">
            <h1 className="direction-step" >Step {idx + 1}</h1>
            <p className="direction-text">{direction}</p>
        </div>
    )
}

export default Directions