import { connect } from 'react-redux';

import { deposit } from '../../actions/sessionActions';
import Deposit from './Deposit'

const mapStateToProps = (state) => {
    return {
        usdBalance: state.session.user.usdBalance
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (depositAmt) => dispatch(deposit(depositAmt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);