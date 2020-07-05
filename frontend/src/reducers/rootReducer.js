import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'
import coinReducer from './coinReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    session: sessionReducer,
    error: errorReducer,
    coin: coinReducer
})

export default rootReducer