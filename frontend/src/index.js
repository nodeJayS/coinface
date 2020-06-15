import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css';
import axios from 'axios'
import Main from './Main'
// import store from './store/store'
// import { Provider } from 'react-redux'

ReactDOM.render(<Main />, document.getElementById('root')) 
// ReactDOM.render(<Provider store={store}><Main />></Provider>, document.getElementById('root')) 

window.axios = axios;