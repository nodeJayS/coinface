import { connect } from 'react-redux'

import { deposit } from '../../actions/assetActions'
import { newTx } from '../../actions/txActions'
import Deposit from './Deposit'

const mapStateToProps = (state) => {
    return {
        userid: state.session.user.id,
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (depositAmt) => dispatch(deposit(depositAmt)),
        newTx: (tx) => dispatch(newTx(tx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);