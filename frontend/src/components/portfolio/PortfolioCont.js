import { connect } from 'react-redux';

import { assetData } from '../../actions/assetActions';
import { fetchCoinData, fetchWeekData, fetchMonthData } from '../../actions/coinActions';
import { watchlist } from '../../actions/watchActions';
import { getAllTx } from '../../actions/txActions'

import Portfolio from './Portfolio'

const mapStateToProps = (state) => {
    return {
        user: state.session.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        assetData: () => dispatch(assetData()),
        watchlist: () => dispatch(watchlist()),
        getAllTx: () => dispatch(getAllTx()),
        fetchCoinData: (coin) => dispatch(fetchCoinData(coin)),
        fetchWeekData: (coin) => dispatch(fetchWeekData(coin)),
        fetchMonthData: (coin) => dispatch(fetchMonthData(coin)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);