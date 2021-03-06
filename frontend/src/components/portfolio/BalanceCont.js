import { connect } from 'react-redux';

import Balance from './Balance'

const mapStateToProps = (state) => {
    return {
        usd: state.assets.usdBalance,
        assets: state.assets.assets,
        watchlist: state.watchlist.watchlist,
        coins: state.coin.coin
    }
}

export default connect(mapStateToProps)(Balance);