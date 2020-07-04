import * as APIUtil from '../util/session_api_util'
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_OUT = "RECEIVE_USER_SIGN_OUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_USER_DEPOSIT = "RECEIVE_USER_DEPOSIT"

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});
  
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signOutUser = () => ({
    type: RECEIVE_USER_SIGN_OUT
});

export const receiveUserDeposit = (deposit) => ({
    type: RECEIVE_USER_DEPOSIT,
    deposit
})

export const register = (user) => dispatch => (
    APIUtil.register(user)
        .then(() => dispatch(receiveUserSignIn()))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const signin = (user) => dispatch => (
    APIUtil.signin(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))
            })
        .catch(err => dispatch(receiveErrors(err.response.data)))
)

export const signout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(signOutUser())
}

export const deposit = (depositAmt) => dispatch => {
    return APIUtil.deposit(depositAmt)
        .then(res => dispatch(receiveUserDeposit(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}