import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import { assetData } from '../../actions/assetActions';
import Dashboard from './Dashboard'

const mapDispatchToProps = (dispatch) => {
    return {
        assetData: () => dispatch(assetData()),
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);