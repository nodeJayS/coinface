import { connect } from 'react-redux';

import Assets from './Assets'

const mapStateToProps = (state) => {
    return {
        usd: state.assets.usdBalance,
        assets: state.assets.assets,
        watchlist: state.watchlist.watchlist,
        coin: state.coin.coin
    }
}

export default connect(mapStateToProps)(Assets);