import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css';
import axios from 'axios'
import Main from './Main'
import configureStore from './store/store'
import { Provider } from 'react-redux'
import { setAuthToken } from './util/session_api_util'
import { signout } from "./actions/sessionActions"
import jwt_decode from 'jwt-decode'

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if(localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decoded = jwt_decode(localStorage.jwtToken);

        const preloadedState = {
            session: {
                isAuthenticated: true,
                user: decoded
            }
        }
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch(signout());
            window.location.href = '/sign-in';
        }
    }   
    else {
        store = configureStore();
    }

    ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root')) 
})

window.axios = axios;