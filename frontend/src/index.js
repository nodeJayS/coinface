import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'

ReactDOM.render(
  <div>
    This is Coinface
  </div>,
  document.getElementById('root')
);

window.axios = axios;