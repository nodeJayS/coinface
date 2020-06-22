import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import CoinList from './CoinList'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(CoinList);