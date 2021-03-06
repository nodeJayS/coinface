import { connect } from 'react-redux';

import CoinChart from './CoinChart'

const mapStateToProps = (state) => {
    return {
        coin: state.coin.coin,
        dailyPrices: state.coin.dailyPrices,
        weekPrices: state.coin.weekPrices,
        monthPrices: state.coin.monthPrices
    }
}

export default connect(mapStateToProps)(CoinChart);