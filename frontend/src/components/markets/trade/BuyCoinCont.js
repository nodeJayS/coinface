import { connect } from 'react-redux';

import { fetchCoinData } from '../../../actions/coinActions';
import { createAsset, updateAsset } from '../../../actions/sessionActions';
import BuyCoin from './BuyCoin';

const mapStateToProps = (state) => {
    return {
        usdBalance: state.session.user.usdBalance,
        assets: state.session.assets
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        createAsset: (asset) => dispatch(createAsset(asset)),
        updateAsset: (asset) => dispatch(updateAsset(asset)),
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCoin);