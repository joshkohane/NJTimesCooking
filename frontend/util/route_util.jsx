import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const mapSTP = state => {
    return { loggedIn: Boolean(state.session.currentUser) }
}

const mapDTP = dispatch => ({
    openModal: () => dispatch(openModal('signup')),
})

const Auth = ({ openModal, loggedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? openModal('signup') :
                <Component {...props} />
        }
    />
);

export const AuthRoute = withRouter(
    connect(
        mapSTP,
        mapDTP
    )(Auth)
);