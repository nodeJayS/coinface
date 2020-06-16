const initState = {
    coin: [
        {coinName: "bitcoin", coinAmount: 10},
        {coinName: "ethereum", coinAmount: 10},
    ]
}

const assetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BUY_COIN':
            console.log('bought coin', action.coin);
        }
    return state
}

export default assetReducer