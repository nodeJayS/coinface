import * as CoinAPIUtil from '../util/coin_util'
import { receiveErrors } from './sessionActions'

export const RECEIVE_COIN_DATA = 'RECEIVE_COIN_DATA'

export const receiveCoinData = (coin) => ({
    type: RECEIVE_COIN_DATA,
    coin
})

export const fetchCoinData = (name) => dispatch => (
    CoinAPIUtil.fetchCoinData(name)
        .then(coin => dispatch(receiveCoinData(coin.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
)