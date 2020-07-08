import * as AssetAPIUtil from '../util/asset_api_util'

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_ALL_ASSET_DATA = 'RECEIVE_ALL_ASSET_DATA'
export const RECEIVE_DEPOSIT = 'RECEIVE_DEPOSIT'
export const RECEIVE_UPDATED_ASSETS = 'RECEIVE_UPDATED_ASSETS'

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveAllAssetData = (payload) => ({
    type: RECEIVE_ALL_ASSET_DATA,
    payload
})

export const receiveDeposit = (deposit) => ({
    type: RECEIVE_DEPOSIT,
    deposit
})

export const receiveUpdatedAssets = (payload) => ({
    type: RECEIVE_UPDATED_ASSETS,
    payload
})

export const assetData = () => dispatch => {
    return AssetAPIUtil.allAssetData()
        .then(res => dispatch(receiveAllAssetData(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const deposit = (depositAmt) => dispatch => {
    return AssetAPIUtil.deposit(depositAmt)
        .then(res => dispatch(receiveDeposit(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const createAsset = (asset) => dispatch => {
    return AssetAPIUtil.createAsset(asset)
        .then(res => dispatch(receiveUpdatedAssets(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const updateAsset = (asset) => dispatch => {
    return AssetAPIUtil.updateAsset(asset)
        .then(res => dispatch(receiveUpdatedAssets(res.data)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}