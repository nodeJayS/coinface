import { RECEIVE_ALL_TX,
        RECEIVE_NEW_TX }
    from '../actions/txActions';

    const initialState = {}
    
    export default function(state = initialState, action) {
        switch (action.type) {
            case RECEIVE_ALL_TX:
                return {
                    ...state,
                    transactions: action.tx
                }
            case RECEIVE_NEW_TX:
                return {
                    ...state,
                    transactions: {
                        ...action.tx
                    }
                }
            default:
                return state;
            }
        }