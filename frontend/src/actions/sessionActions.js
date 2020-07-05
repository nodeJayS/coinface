import * as SessionAPIUtil from '../util/session_api_util'
import * as AssetAPIUtil from '../util/asset_util'
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_OUT = "RECEIVE_USER_SIGN_OUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_USER_DEPOSIT = "RECEIVE_USER_DEPOSIT"

export const RECEIVE_CREATED_ASSET = 'RECEIVE_CREATED_ASSET'
export const RECEIVE_UPDATED_ASSET = 'RECEIVE_UPDATED_ASSET'

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
export const receiveCreatedAsset = (asset) => ({
    type: RECEIVE_CREATED_ASSET,
    asset
})
export const receiveUpdatedAsset = (asset) => ({
    type: RECEIVE_UPDATED_ASSET,
    asset
})

export const register = (user) => dispatch => (
    SessionAPIUtil.register(user)
        .then(() => dispatch(receiveUserSignIn()))
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

export const deposit = (depositAmt) => dispatch => {
    return SessionAPIUtil.deposit(depositAmt)
        .then(res => dispatch(receiveUserDeposit(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const createAsset = (asset) => dispatch => {
    return AssetAPIUtil.createAsset(asset)
        .then(res => dispatch(receiveCreatedAsset(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const updateAsset = (asset) => dispatch => {
    return AssetAPIUtil.updateAsset(asset)
        .then(res => dispatch(receiveUpdatedAsset(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}