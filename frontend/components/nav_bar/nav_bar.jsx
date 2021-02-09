import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            className: 'recipe-box-text',
            inputValue: '',
        }
        this.getShow = this.getShow.bind(this);
        this.hideShow = this.hideShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.clearSearch();
            this.setState({ inputValue: '', show: false });
        }
    }

    getShow(e) {
        e.preventDefault();
        this.setState({show: true})
    }

    hideShow(e) {
        e.preventDefault();
        this.setState({ show: false })
        this.props.clearSearch();
        this.setState({inputValue: ''});
    }

    handleChange(e) {
        let input = e.target.value;
        this.setState({inputValue: input})
        if (input === '') {
            this.props.clearSearch();
        } else {
            Object.values(this.props.search(input));
        }
    }

    handleSubmit(e) {
        this.props.history.push({pathname: `/api/search/${this.state.inputValue}`})
        this.setState({inputValue: ""})
        this.props.clearSearch();
    }

    render() {
        const { currentUser, logout, loggedIn, searches } = this.props;
        return (
            <div className="nav-bar-container">
                <Link to="/" style={{ textDecoration: 'none' }} >
                    <div className="main-logo">
                        <img className="logo-left" src={window.njIMG} alt="The NJTimesCooking Logo" />
                        <p className="logo-right" >Cooking</p>
                    </div>
                </Link>
                <div className="nav-bar-search" >
                    <i className="fas fa-search"></i>
                    <form className="search-form" onSubmit={this.handleSubmit} >
                        <input onClick={this.getShow} onChange={this.handleChange} value={this.state.inputValue} type="text" className="search-input" placeholder="What would you like to cook?" />
                    </form>
                    <i onClick={this.hideShow} className={this.state.show ? "fas fa-times-circle" : ''}></i>
                    {!searches ? 
                        '' :
                        <ul className="search-results" >
                            {Object.values(searches).map((recipe, idx) => (
                                <Link key={idx} to={`/api/recipes/${recipe.id}`} className="search-results-wrapper" style={{ textDecoration: 'none' }}>
                                    <li className="search-results-child"   >
                                        {recipe.title}
                                    </li>
                                </Link>
                            )
                            )}
                        </ul>
                    }
                </div>
                <div className="nav-bar-end">
                    <div className="recipe-box" onClick={loggedIn ? () => {} : () => this.props.openModal('login')} >
                        <div className="recipe-spacer"></div>
                        {loggedIn ? 
                            <Link to={`/api/user/${currentUser}/recipeBox`} style={{ textDecoration: 'none' }}>
                                <p className={this.props.location.pathname.includes('recipeBox') ? "recipe-box-show" : "recipe-box-text"} ></p>
                            </Link>
                        :
                            <div className="recipe-box-login-container" >
                                <p className="recipe-box-text" ></p>
                                <div className="recipe-box-login" >Log In</div>
                            </div>
                        }
                    </div>
                    <div className="nav-bar-dropdown">
                            <i className="fas fa-cog"></i>
                            <div className="nav-bar-dropdown-spacer" ></div>
                            {currentUser ? 
                                <button className="nav-bar-dropdown-show" onClick={logout}>Log Out</button> :
                                <button className="nav-bar-dropdown-show" onClick={() => this.props.openModal('login')}>Log In</button>
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;