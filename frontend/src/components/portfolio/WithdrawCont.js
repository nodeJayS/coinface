import { connect } from 'react-redux'

import { withdraw } from '../../actions/assetActions'
import { newTx } from '../../actions/txActions'
import Withdraw from './Withdraw'

const mapStateToProps = (state) => {
    return {
        userid: state.session.user.id,
        usdBalance: state.assets.usdBalance
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        withdraw: (withdrawAmt) => dispatch(withdraw(withdrawAmt)),
        newTx: (tx) => dispatch(newTx(tx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);