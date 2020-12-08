import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const { currentUser, logout } = this.props;
        return (
            <div>
                {currentUser ? 
                    <button onClick={() => logout()}>Log Out</button> :
                    <Link to='/login'>Log In</Link>
                }
            </div>
        )
    }
}

export default NavBar