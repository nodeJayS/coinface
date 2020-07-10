import { connect } from 'react-redux';

import { watchlist } from '../../actions/watchActions'
import { fetchCoinData } from '../../actions/coinActions';
import { assetData } from '../../actions/assetActions';
import CoinPage from './CoinPage'

const mapDispatchToProps = (dispatch) => {
    return {
        watchlist: () => dispatch(watchlist()),
        assetData: () => dispatch(assetData()),
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(CoinPage);