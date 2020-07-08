import * as SessionAPIUtil from '../util/session_api_util'
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_OUT = "RECEIVE_USER_SIGN_OUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});
export const receiveUserSignIn = (payload) => ({
    type: RECEIVE_USER_SIGN_IN,
    payload
});
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
export const signOutUser = () => ({
    type: RECEIVE_USER_SIGN_OUT
});

export const register = (user) => dispatch => (
    SessionAPIUtil.register(user)
        .then((res) => dispatch(receiveUserSignIn(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const signin = (user) => dispatch => (
    SessionAPIUtil.signin(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            SessionAPIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))
            })
        .catch(err => dispatch(receiveErrors(err.response.data)))
)

export const signout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    SessionAPIUtil.setAuthToken(false)
    dispatch(signOutUser())
}