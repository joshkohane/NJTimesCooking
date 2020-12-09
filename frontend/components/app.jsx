import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import HomePage from './home_page/home_page';

const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Route path='/' component={HomePage} />
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
)

export default App;