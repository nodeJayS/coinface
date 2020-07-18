import { connect } from 'react-redux';

import CoinBalance from './CoinBalance';

const mapStateToProps = (state) => {
    return {
        coin: state.coin.coin,
        usdBalance: state.assets.usdBalance,
        assets: state.assets.assets,
    }
}

export default connect(mapStateToProps)(CoinBalance);