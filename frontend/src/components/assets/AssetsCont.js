import { connect } from 'react-redux';

import Assets from './Assets'

const mapStateToProps = (state) => {
    return {
        usd: state.assets.usdBalance,
        watchlist: state.watchlist.watchlist,
        coin: state.coin.coin,
        assets: state.assets.assets,
    }
}

export default connect(mapStateToProps)(Assets);