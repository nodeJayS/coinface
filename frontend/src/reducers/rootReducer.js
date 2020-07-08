import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'
import coinReducer from './coinReducer'
import assetReducer from './assetReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    assets: assetReducer,
    coin: coinReducer,
    error: errorReducer
})

export default rootReducer