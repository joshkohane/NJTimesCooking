import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import ReactGA from 'react-ga';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    ReactGA.initialize('UA-188191709-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

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

    ReactDOM.render(<Root store={store} />, root)
})