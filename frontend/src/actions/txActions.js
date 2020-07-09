import * as TxAPIUtil from '../util/tx_api_util'

export const RECEIVE_ALL_TX = 'RECEIVE_ALL_TX'
export const RECEIVE_NEW_TX = 'RECEIVE_NEW_TX'

export const receiveAllTx = (tx) => ({
    type: RECEIVE_ALL_TX,
    tx
})

export const receiveNewTx = (tx) => ({
    type: RECEIVE_NEW_TX,
    tx
})

export const getAllTx = (userid) => dispatch => {
    return TxAPIUtil.getAllTx(userid)
        .then(res => dispatch(receiveAllTx(res.data)))
        .catch(err => console.log('error'))
}

export const newTx = (tx) => dispatch => {
    return TxAPIUtil.newTx(tx)
        .then(res => dispatch(receiveNewTx(res.data)))
        .catch(err => console.log('error'))
}