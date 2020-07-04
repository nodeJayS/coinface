import { RECEIVE_CURRENT_USER,
        RECEIVE_USER_SIGN_OUT,
        RECEIVE_USER_SIGN_IN,
        RECEIVE_USER_DEPOSIT }
        from '../actions/sessionActions';

const initialState = {
    isAuthenticated: false,
    user: localStorage.getItem('state'),
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
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
                user: action.payload
            };
        case RECEIVE_USER_DEPOSIT:
            return {
                ...state,
                user: {
                    ...state.user,
                    usdBalance: action.deposit.usdBalance,
                    assetBalance: action.deposit.assetBalance
                }
            };
        default:
            return state;
        }
}