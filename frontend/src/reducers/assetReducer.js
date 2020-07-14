import { RECEIVE_ALL_ASSET_DATA,
    RECEIVE_DEPOSIT,
    RECEIVE_WITHDRAWAL,
    RECEIVE_UPDATED_ASSETS }
    from '../actions/assetActions';

    const initialState = {};
    
    export default function(state = initialState, action) {
        switch (action.type) {
            case RECEIVE_ALL_ASSET_DATA:
                return {
                    ...state,
                    usdBalance: action.payload.usdBalance,
                    assets: action.payload.assets
                }
            case RECEIVE_DEPOSIT:
                return {
                    ...state,
                    usdBalance: action.deposit.usdBalance
                };
            case RECEIVE_WITHDRAWAL:
                return {
                    ...state,
                    usdBalance: action.withdraw.usdBalance
                };
            case RECEIVE_UPDATED_ASSETS:
                return {
                    ...state,
                    usdBalance: action.payload.usdBalance,
                    assets: action.payload.assets
                };
            default:
                return state;
            }
        }