import { connect } from 'react-redux';

import { fetchCoinData } from '../../actions/coinActions';
import { getAllTx } from '../../actions/txActions'
import { assetData } from '../../actions/assetActions';
import { watchlist } from '../../actions/watchActions';

import Dashboard from './Dashboard'

const mapStateToProps = (state) => {
    return {
        userid: state.session.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinData: () => dispatch(fetchCoinData()),
        assetData: () => dispatch(assetData()),
        watchlist: () => dispatch(watchlist()),
        getAllTx: () => dispatch(getAllTx()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);