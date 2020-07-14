import * as CoinAPIUtil from '../util/coin_util'

export const RECEIVE_COIN_DATA = 'RECEIVE_COIN_DATA'
export const RECEIVE_WEEK_DATA = 'RECEIVE_WEEK_DATA'
export const RECEIVE_MONTH_DATA = 'RECEIVE_MONTH_DATA'

export const receiveCoinData = (coin) => ({
    type: RECEIVE_COIN_DATA,
    coin
})

export const receiveWeekData = (coin) => ({
    type: RECEIVE_WEEK_DATA,
    coin
})

export const receiveMonthData = (coin) => ({
    type: RECEIVE_MONTH_DATA,
    coin
})

export const fetchCoinData = (name) => dispatch => (
    CoinAPIUtil.fetchCoinData(name)
        .then(coin => dispatch(receiveCoinData(coin.data)))
        .catch(err => dispatch(console.log(err)))
)

export const fetchWeekData = (name) => dispatch => (
    CoinAPIUtil.fetchWeekData(name)
        .then(coin => dispatch(receiveWeekData(coin.data)))
        .catch(err => dispatch(console.log(err)))
)

export const fetchMonthData = (name) => dispatch => (
    CoinAPIUtil.fetchMonthData(name)
        .then(coin => dispatch(receiveMonthData(coin.data)))
        .catch(err => dispatch(console.log(err)))
)