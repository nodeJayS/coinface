import axios from 'axios';

export const buyTx = (coinTx) => {
    return axios.post('/api/transactions/buy', coinTx)
};