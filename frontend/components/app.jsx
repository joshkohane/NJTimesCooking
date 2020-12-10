import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import HomePageContainer from './home_page/home_page_container';
import Footer from './static_elements/footer'


const App = () => (
    <div className="main-app" >
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route exact path='/' component={HomePageContainer} />
            <Redirect to='/'/>
        </Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Footer />
    </div>
)

export default App;