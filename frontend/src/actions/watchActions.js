import * as WatchAPIUtil from '../util/watchlist_api_util'

export const RECEIVE_WL = 'RECEIVE_WL'
export const RECEIVE_UPDATED_WL = 'RECEIVE_UPDATED_WL'
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveWL = (payload) => ({
    type: RECEIVE_WL,
    payload
})

export const receiveUpdatedWL = (payload) => ({
    type: RECEIVE_UPDATED_WL,
    payload
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const watchlist = () => dispatch => {
    return WatchAPIUtil.getWatchlist()
        .then(res => dispatch(receiveWL(res.data)))
        .catch(err => console.log(err))
}

export const updateWL = (asset) => dispatch => {
    return WatchAPIUtil.addWatchlist(asset)
        .then(res => dispatch(receiveUpdatedWL(res.data)))
        .catch(err => console.log(err))
}

export const removeWL = (asset) => dispatch => {
    return WatchAPIUtil.removeWatchlist(asset)
        .then(res => dispatch(receiveUpdatedWL(res.data)))
        .catch(err => console.log(err))
}