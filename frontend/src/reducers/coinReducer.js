const initState = {
    coin: []
}

const marketReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BUY_COIN':
            console.log('bought coin', action.coin);
            break
        default:
            return state
        }
}

export default marketReducer