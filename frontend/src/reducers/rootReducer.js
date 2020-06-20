import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'
import assetReducer from './assetReducer'
// import marketReducer from './marketReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    error: errorReducer,
    asset: assetReducer,
    // market: marketReducer
})

export default rootReducer