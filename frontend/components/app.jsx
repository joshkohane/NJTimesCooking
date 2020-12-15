import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import HomePageContainer from './home_page/home_page_container';
import Footer from './static_elements/footer';
import RecipePageContainer from './recipe_page/recipe_page_container';
import RecipeBoxContainer from './recipe_box/recipe_box_container';


const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route path={`/api/recipes/:recipeId`} component={RecipePageContainer} />
            <Route path={`/api/user/:userId/recipeBox`} component={RecipeBoxContainer} />
            <Route exact path='/' component={HomePageContainer} />
            <Redirect to='/'/>
        </Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Footer />
    </div>
)

export default App;