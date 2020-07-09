import axios from 'axios';

export const getAllTx = () => {
    return axios.get('/api/transactions')
}

export const newTx = (coinTx) => {
    return axios.post('/api/transactions/newTx', coinTx)
};