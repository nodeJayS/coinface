import axios from 'axios';

export const fetchCoinData = (coinIds) => {
    let coinURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&order=market_cap_desc&page=1&per_page=50&sparkline=true&price_change_percentage=24h,7d'
    if (coinIds) {
        const coinIDS = `&ids=` + coinIds;
        coinURL += coinIDS
    }
    return axios.get(coinURL)
};

export const fetchDailyData = (coinId) => {
    let coinURL = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`
    return axios.get(coinURL)
}

export const fetchWeekData = (coinId) => {
    let coinURL = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
    return axios.get(coinURL)
}

export const fetchMonthData = (coinId) => {
    let coinURL = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`
    return axios.get(coinURL)
}