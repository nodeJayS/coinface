import { connect } from 'react-redux';

import { watchlist } from '../../actions/watchActions';
import { fetchCoinData, fetchDailyData, fetchWeekData, fetchMonthData } from '../../actions/coinActions';
import { assetData } from '../../actions/assetActions';
import CoinPage from './CoinPage';

const mapDispatchToProps = (dispatch) => {
    return {
        watchlist: () => dispatch(watchlist()),
        assetData: () => dispatch(assetData()),
        fetchCoinData: (coin) => dispatch(fetchCoinData(coin)),
        fetchDailyData: (coin) => dispatch(fetchDailyData(coin)),
        fetchWeekData: (coin) => dispatch(fetchWeekData(coin)),
        fetchMonthData: (coin) => dispatch(fetchMonthData(coin)),
    }
}

export default connect(null, mapDispatchToProps)(CoinPage);