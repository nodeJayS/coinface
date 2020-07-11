import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions'
import Balance from './Balance'

const mapStateToProps = (state) => {
    return {
        usd: state.assets.usdBalance,
        assets: state.assets.assets,
        watchlist: state.watchlist.watchlist,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinData: (coin) => dispatch(fetchCoinData(coin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance);