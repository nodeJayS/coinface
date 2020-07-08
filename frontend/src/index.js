import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css';
import Root from './Root'
import configureStore from './store/store'
import { setAuthToken } from './util/session_api_util'
import { signout } from "./actions/sessionActions"
import jwt_decode from 'jwt-decode'
// import { loadState, saveState } from './store/localStorage'

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if(localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);

        // const preloadedState = loadState()
        const preloadedState = { session: { 
            isAuthenticated: true,
            user: decodedUser
            // assets: decodedUser.assets 
        } };

        store = configureStore(preloadedState);

        // store.subscribe(() => saveState(store.getState()))

        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
            store.dispatch(signout());
            window.location.href = '/sign-in';
        }
    }   
    else {
        store = configureStore({});
    }

    const root = document.getElementById('root');
    
    ReactDOM.render(<Root store={store} />, root); 
})