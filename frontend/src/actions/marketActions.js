export const buyCoin = (coin) => {
    return (dispatch, getState) => {
        dispatch({ 
            type: 'BUY_COIN ',
            coin
        })
    }
}