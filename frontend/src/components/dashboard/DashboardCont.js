import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import { assetData } from '../../actions/assetActions';
import { watchlist } from '../../actions/watchActions';

import Dashboard from './Dashboard'

const mapDispatchToProps = (dispatch) => {
    return {
        assetData: () => dispatch(assetData()),
        watchlist: () => dispatch(watchlist()),
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);