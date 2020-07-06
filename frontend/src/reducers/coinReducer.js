import { RECEIVE_COIN_DATA } from '../actions/coinActions'

const initState = {
    coin: []
}

const coinReducer = (state = initState, action) => {
    switch (action.type) {
        case RECEIVE_COIN_DATA:
            return {
                ...state,
                coin: [
                    ...action.coin
                ]
            };
        default:
            return state
        }
}

export default coinReducer