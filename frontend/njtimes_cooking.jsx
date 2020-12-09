import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
import { fetchAllRecipes, fetchRecipe, fetchAuthor } from './util/recipe_util';
import { fetchOneRecipe, fetchEveryRecipe } from './actions/recipe_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // FOR TESTING ONLY
    window.store = store;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.fetchAllRecipes = fetchAllRecipes;
    window.fetchRecipe = fetchRecipe;
    window.fetchAuthor = fetchAuthor;
    window.fetchOneRecipe = fetchOneRecipe;
    window.fetchEveryRecipe = fetchEveryRecipe;
    // 

    ReactDOM.render(<Root store={store} />, root)
})