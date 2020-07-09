import { connect } from 'react-redux';

import { buyTx } from '../../../actions/txActions'
import { createAsset, updateAsset } from '../../../actions/assetActions';
import BuyCoin from './BuyCoin';

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        coin: state.coin.coin,
        usdBalance: state.assets.usdBalance,
        assets: state.assets.assets,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        buyTx: (asset) => dispatch(buyTx(asset)),
        createAsset: (asset) => dispatch(createAsset(asset)),
        updateAsset: (asset) => dispatch(updateAsset(asset)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCoin);