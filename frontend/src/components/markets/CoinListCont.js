import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import { watchlist } from '../../actions/watchActions';
import CoinList from './CoinList';

const mapDispatchToProps = (dispatch) => {
    return {
        watchlist: () => dispatch(watchlist()),
        fetchCoinData: (coin) => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(CoinList);