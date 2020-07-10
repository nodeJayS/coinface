import { RECEIVE_WL,
    RECEIVE_UPDATED_WL }
    from '../actions/watchActions';

    const initialState = {};
    
    export default function(state = initialState, action) {
        switch (action.type) {
            case RECEIVE_WL:
                return {
                    ...state,
                    watchlist: action.payload
                }
            case RECEIVE_UPDATED_WL:
                return {
                    ...state,
                    watchlist: action.payload
                };
            default:
                return state;
            }
        }