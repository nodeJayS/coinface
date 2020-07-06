import { RECEIVE_CURRENT_USER,
    RECEIVE_USER_SIGN_OUT,
    RECEIVE_USER_SIGN_IN,
    RECEIVE_USER_DEPOSIT,
    RECEIVE_UPDATED_ASSETS }
    from '../actions/sessionActions';

const initialState = {
    isAuthenticated: false,
    user: localStorage.getItem('state'),
    assets: []
};

export default function(state = initialState, action) {
switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !!action.currentUser,
            user: action.currentUser,
            assets: action.currentUser.assets
        };
    case RECEIVE_USER_SIGN_OUT:
        return {
            isAuthenticated: false,
            user: undefined
        };
    case RECEIVE_USER_SIGN_IN:
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            assets: action.payload.assets
        };
    case RECEIVE_USER_DEPOSIT:
        return {
            ...state,
            user: {
                ...state.user,
                usdBalance: action.deposit.usdBalance
            }
        };
    case RECEIVE_UPDATED_ASSETS:
        return {
            ...state,
            user: {
                ...state.user,
                usdBalance: action.payload.usdBalance
            },
            assets: action.payload.assets
        };
    default:
        return state;
    }
}