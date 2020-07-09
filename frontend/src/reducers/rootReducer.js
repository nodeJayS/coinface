import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'
import coinReducer from './coinReducer'
import assetReducer from './assetReducer'
import txReducer from './txReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    assets: assetReducer,
    transactions: txReducer,
    error: errorReducer,
    coin: coinReducer
})

export default rootReducer