import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import { watchlist } from '../../actions/watchActions';
import CoinListHome from './CoinListHome';

const mapDispatchToProps = (dispatch) => {
    return {
        watchlist: () => dispatch(watchlist()),
        fetchCoinData: (coin) => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(CoinListHome);