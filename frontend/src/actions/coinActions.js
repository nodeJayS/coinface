import * as CoinAPIUtil from '../util/coin_util'
import { receiveErrors } from './sessionActions';

export const RECIEVE_COIN_DATA = 'RECIEVE_COIN_DATA'
export const RECIEVE_ALL_COIN_DATA = 'RECIEVE_ALL_COIN_DATA'
export const BUY_COIN = 'BUY_COIN'

export const recieveCoinData = (coin) => ({
    type: RECIEVE_COIN_DATA,
    coin
})

export const recieveAllCoinData = (coins) => ({
    type: RECIEVE_ALL_COIN_DATA,
    coins
})

export const buyCoin = (coin) => ({
    type: BUY_COIN,
        coin
})

export const fetchCoinData = (symbol) => dispatch => (
    CoinAPIUtil.fetchCoinData(symbol)
        .then(coin => dispatch(recieveCoinData(coin)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
)

export const fetchAllCoinData = () => dispatch => (
    CoinAPIUtil.fetchCoinData()
        .then(coins => dispatch(recieveAllCoinData(coins)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
)