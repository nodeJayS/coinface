import axios from 'axios';

export const allAssetData = () => {
    return axios.get('/api/assets/allAssetData')
}

export const deposit = (depositAmt) => {
    return axios.patch('/api/assets/depositUSD', depositAmt)
};

export const subtract = (usdAmount) => {
    return axios.patch('/api/assets/subtractUSD', usdAmount)
};

export const createAsset = (asset) => {
    return axios.post('/api/assets/createAsset', asset)
};

export const updateAsset = (asset) => {
    return axios.patch('/api/assets/updateAsset', asset)
};