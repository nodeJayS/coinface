import axios from 'axios';

export const fetchCoinData = (coinIds) => {
    let coinURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h,7d'
    if (coinIds) {
        const coinIDS = `&ids=` + coinIds;
        coinURL += coinIDS
    }
    return axios.get(coinURL)
};
