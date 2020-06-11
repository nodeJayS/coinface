import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css';
import axios from 'axios'
import Home from './Home'

ReactDOM.render(<Home />, document.getElementById('root')) 

window.axios = axios;