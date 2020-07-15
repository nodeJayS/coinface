import { RECEIVE_CURRENT_USER,
    RECEIVE_USER_SIGN_OUT }
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
        };
    default:
        return state;
    }
}