import authReducer from './authReducer'
import assetReducer from './assetReducer'
// import marketReducer from './marketReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    asset: assetReducer,
    // market: marketReducer
})

export default rootReducer