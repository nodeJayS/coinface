import { connect } from 'react-redux';

import { newTx } from '../../../actions/txActions'
import { deleteAsset, updateSellAsset } from '../../../actions/assetActions';
import SellCoin from './SellCoin';

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
        newTx: (asset) => dispatch(newTx(asset)),
        updateSellAsset: (asset) => dispatch(updateSellAsset(asset)),
        deleteAsset: (asset) => dispatch(deleteAsset(asset)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellCoin);