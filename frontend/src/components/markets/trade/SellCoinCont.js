import { connect } from 'react-redux';

// import { buyTx } from '../../../actions/txActions'
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
        // buyTx: (asset) => dispatch(buyTx(asset)),
        updateSellAsset: (asset) => dispatch(updateSellAsset(asset)),
        deleteAsset: (asset) => dispatch(deleteAsset(asset)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellCoin);