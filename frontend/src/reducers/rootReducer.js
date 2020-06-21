import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'
import assetReducer from './assetReducer'
import coinReducer from './coinReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    error: errorReducer,
    asset: assetReducer,
    coin: coinReducer
})

export default rootReducer