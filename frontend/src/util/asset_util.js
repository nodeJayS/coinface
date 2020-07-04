import axios from 'axios';

export const createAsset = (coinTx) => {
    return axios.post('/api/assets/createAsset', coinTx)
};

export const updateAsset = (coinTx) => {
    return axios.patch('/api/assets/updateAsset', coinTx)
};