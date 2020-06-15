import authReducer from './authReducer'
import marketReducer from './marketReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    market: marketReducer
})

export default rootReducer