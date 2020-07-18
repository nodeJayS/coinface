import { RECEIVE_COIN_DATA,
        RECEIVE_DAILY_DATA,
        RECEIVE_WEEK_DATA,
        RECEIVE_MONTH_DATA } from '../actions/coinActions'

const initState = {}

const coinReducer = (state = initState, action) => {
    switch (action.type) {
        case RECEIVE_COIN_DATA:
            return {
                ...state,
                coin: action.coin
            };
        case RECEIVE_DAILY_DATA:
            return {
                ...state,
                dailyPrices: action.coin.prices
            };
        case RECEIVE_WEEK_DATA:
            return {
                ...state,
                weekPrices: action.coin.prices
            };
        case RECEIVE_MONTH_DATA:
            return {
                ...state,
                monthPrices: action.coin.prices
            };
        default:
            return state
        };
}
;
export default coinReducer