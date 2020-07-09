import axios from 'axios';

export const getAllTx = () => {
    return axios.get('/api/transactions')
}

export const buyTx = (coinTx) => {
    return axios.post('/api/transactions/buy', coinTx)
};