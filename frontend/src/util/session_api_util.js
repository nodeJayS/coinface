import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const register = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const signin = (userData) => {
    return axios.post('/api/users/signin', userData);
};

export const deposit = (depositAmt) => {
    return axios.patch('/api/users/deposit', depositAmt)
};

export const subtract = (usdAmount) => {
    return axios.patch('/api/users/subtract', usdAmount)
};

export const addAsset = (buyTx) => {
    return axios.patch('/api/users/updateAsset', buyTx)
};