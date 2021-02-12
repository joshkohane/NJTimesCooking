import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBarMobile({ loggedIn, logout, currentUser, searches, openModal, history, clearSearch, search }) {
    const [showSide, setShowSide] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showClose, setShowClose] = useState(false);

    function handleOpenSide() {
        setShowSide(true);
        setShowSearch(false);
    }

    function handleOpenSearch() {
        setShowSide(false);
        setShowSearch(true);
    }

    function handleCloseSearch() {
        setShowSearch(false);
        clearSearch();
    }

    function handleOpenInput() {
        setShowClose(true);
    }

    function handleCloseInput() {
        setShowClose(false);
        setSearchValue('');
        clearSearch();
    }

    function handleLink() {
        setShowClose(false);
        setShowSearch(false);
        setSearchValue('');
        clearSearch();
    }

    function handleSubmit() {
        history.push({ pathname: `/api/search/${searchValue}` });
        setShowSearch(false);
        setSearchValue('');
        setShowClose(false);
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
        handleSearch();
    }

    function handleLogin(type) {
        openModal(type);
        setShowSide(false);
    }

    function handleLogout() {
        logout();
        setShowSide(false);
    }
    
    function handleSearch() {
        if (searchValue === '') {
            clearSearch();
        } else {
            Object.values(search(searchValue));
        }
    }

    return (
        <div className="nav-bar-mobile-container">
            {showSide ? 
                <div className="mobile-nav-side-container">
                    <p className="mobile-nav-close-icon" onClick={() => setShowSide(false)}>&#x2715;</p>
                    <div className="mobile-nav-side-open">
                        <Link to="/" style={{ textDecoration: 'none' }} >
                            <div className="mobile-nav-side-text-home" onClick={() => setShowSide(false)} >Home</div>
                        </Link>
                        {loggedIn ?
                            <div>
                                <Link to={`/api/user/${currentUser}/recipeBox`} style={{ textDecoration: 'none' }}>
                                    <div className="mobile-nav-side-text-box" onClick={() => setShowSide(false)}>Your Recipe Box</div>
                                </Link>
                                <div className="mobile-nav-side-logout" onClick={handleLogout}>Log Out</div>                            
                            </div>
                        : 
                            <div className="mobile-nav-side-login-container">
                                <p className="mobile-nav-login-text">Save and organize your<br />favorite recipes.</p>
                                <button type="button" onClick={() => handleLogin('signup')} className="mobile-signup-btn">Create Your Recipe Box</button>
                                <button type="button" onClick={() => handleLogin('login')} className="mobile-login-btn">Log In</button>
                            </div>
                        }
                    </div>
                </div>
            :
                <i className="fas fa-bars mobile-nav-hamburger-icon" onClick={handleOpenSide}></i>
            }
            <Link to="/" style={{ textDecoration: 'none' }} >
                <div className="mobile-logo">
                    <img className="mobile-logo-left" src={window.njblackIMG} alt="The NJTimesCooking Logo" />
                    <p className="mobile-logo-right" >Cooking</p>
                </div>
            </Link>
            {loggedIn ?
                <Link to={`/api/user/${currentUser}/recipeBox`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-archive mobile-nav-recipe-box-icon"></i>
                </Link>
                : ''
            }
            {showSearch ? 
                <div className="mobile-nav-search-outer-container">
                    <p className="mobile-nav-close-search-icon" onClick={handleCloseSearch}>&#x2715;</p>
                    <div className="mobile-nav-search-container">
                        <form className="mobile-search-form" onSubmit={handleSubmit}>
                            <input type="text" 
                                className="mobile-search-input" 
                                placeholder="What would you like to cook?" 
                                value={searchValue}
                                onChange={handleChange}
                                onClick={handleOpenInput}
                                spellCheck="false"
                                />
                            <i onClick={handleCloseInput} className={showClose ? "fas fa-times-circle mobile-nav-close-input-icon" : ''}></i>
                            <button className="mobile-search-go" onClick={handleSubmit}>Go</button>
                        </form>
                    </div>
                    {searches.length === 0 ?
                        '' :
                        <div className="mobile-nav-bar-search">
                            <ul className="search-results" >
                                {Object.values(searches).map((recipe, idx) => (
                                    <Link key={idx} to={`/api/recipes/${recipe.id}`} className="search-results-wrapper" style={{ textDecoration: 'none' }}>
                                        <li className="search-results-child" onClick={handleLink}>
                                            {recipe.title}
                                        </li>
                                    </Link>
                                )
                                )}
                            </ul>
                        </div>
                    }
                </div>
            :
                <i className="fas fa-search mobile-nav-search-icon" onClick={handleOpenSearch}></i>
            }
        </div>
    )
}

export default NavBarMobile;