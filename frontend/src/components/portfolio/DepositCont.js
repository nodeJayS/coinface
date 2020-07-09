import { connect } from 'react-redux';

import { deposit } from '../../actions/assetActions';
import Deposit from './Deposit'

const mapStateToProps = (state) => {
    return {
        userid: state.session.user.id,
        usdBalance: state.session.user.usdBalance
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (depositAmt) => dispatch(deposit(depositAmt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);