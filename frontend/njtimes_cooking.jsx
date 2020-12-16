import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
import { fetchAllRecipes, fetchRecipe, searchRecipes } from './util/recipe_util';
import { fetchThisUser } from './actions/user_actions';
import { saveRecipe, deleteSave } from './util/saves_util';
import { fetchOneRecipe, fetchEveryRecipe, search, clearSearch } from './actions/recipe_actions';
import { saveThisRecipe, deleteThisSave } from './actions/save_actions';
import { selectSearched } from './reducers/selectors';
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
    window.fetchOneRecipe = fetchOneRecipe;
    window.fetchEveryRecipe = fetchEveryRecipe;
    window.saveRecipe = saveRecipe;
    window.deleteSave = deleteSave;
    window.saveThisRecipe = saveThisRecipe;
    window.deleteThisSave = deleteThisSave;
    window.fetchThisUser = fetchThisUser;
    window.selectSearched = selectSearched;
    window.search = search;
    window.searchRecipes = searchRecipes;
    window.clearSearch = clearSearch;
    // 

    ReactDOM.render(<Root store={store} />, root)
})