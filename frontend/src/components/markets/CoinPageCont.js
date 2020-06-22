import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import CoinPage from './CoinPage'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(CoinPage);