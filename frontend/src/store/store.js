import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer'

const configureStore = (preloadedState = {}) => (createStore(
    rootReducer,
    preloadedState, 
    composeWithDevTools(
    applyMiddleware(thunk, logger))
    ));

export default configureStore