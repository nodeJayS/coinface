import * as TxAPIUtil from '../util/tx_api_util'

export const RECEIVE_ALL_TX = 'RECEIVE_ALL_TX'
export const RECEIVE_BUY_TX = 'RECEIVE_BUY_TX'

export const receiveAllTx = (tx) => ({
    type: RECEIVE_ALL_TX,
    tx
})

export const receiveBuyTx = (tx) => ({
    type: RECEIVE_BUY_TX,
    tx
})

export const getAllTx = (userid) => dispatch => {
    return TxAPIUtil.getAllTx(userid)
        .then(res => dispatch(receiveAllTx(res.data)))
        .catch(err => console.log('error'))
}

export const buyTx = (tx) => dispatch => {
    return TxAPIUtil.buyTx(tx)
        .then(res => dispatch(receiveBuyTx(res.data)))
        .catch(err => console.log('error'))
}