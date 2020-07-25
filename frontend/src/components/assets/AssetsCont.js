import { connect } from 'react-redux';

import Assets from './Assets'

const mapStateToProps = (state) => {
    return {
        coin: state.coin.coin,
        usd: state.assets.usdBalance,
        watchlist: state.watchlist.watchlist,
        assets: state.assets.assets,
    }
}

export default connect(mapStateToProps)(Assets);