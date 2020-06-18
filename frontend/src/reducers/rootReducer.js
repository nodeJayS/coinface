import sessionReducer from './sessionReducer'
import assetReducer from './assetReducer'
// import marketReducer from './marketReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    asset: assetReducer,
    // market: marketReducer
})

export default rootReducer