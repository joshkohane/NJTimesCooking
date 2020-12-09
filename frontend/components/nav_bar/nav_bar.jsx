import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const { currentUser, logout } = this.props;
        return (
            <div>
                <Link to="/">
                    <div className="main-logo">
                        {/* <p className="logo-left" >J</p> */}
                        {/* <p className="logo-right" >Cooking</p> */}
                        <img className="logo-left" src={window.njIMG} alt="The NJTimesCooking Logo" />
                        <img className="logo-right" src={window.logoIMG} alt="The NJTimesCooking Logo" />
                    </div>
                </Link>
                {currentUser ? 
                    <button onClick={() => logout()}>Log Out</button> :
                    <button onClick={() => this.props.openModal('login')}>Log In</button>
                    // <Link to='/login'>Log In</Link>
                }
            </div>
        )
    }
}

export default NavBar