import { RECEIVE_CURRENT_USER,
    RECEIVE_USER_SIGN_OUT,
    RECEIVE_USER_SIGN_IN }
    from '../actions/sessionActions';

const initialState = {
    isAuthenticated: false,
    user: {}
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
            user: undefined,
            assets: undefined
        };
    case RECEIVE_USER_SIGN_IN:
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            assets: action.payload.assets
        };
    default:
        return state;
    }
}