import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css';
import axios from 'axios'
import Main from './Main'

ReactDOM.render(<Main />, document.getElementById('root')) 

window.axios = axios;