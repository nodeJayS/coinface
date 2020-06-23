const initState = {
    coin: []
}

const coinReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BUY_COIN':
            console.log('bought coin', action.coin);
            break
        default:
            return state
        }
}

export default coinReducer