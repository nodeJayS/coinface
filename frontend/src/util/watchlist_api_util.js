import axios from 'axios';

export const getWatchlist = () => {
    return axios.get('/api/watchlist')
}

export const addWatchlist = (coin) => {
    return axios.post('/api/watchlist/add', coin)
}

export const removeWatchlist = (coin) => {
    return axios.patch('/api/watchlist/remove', coin)
}