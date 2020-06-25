import { connect } from 'react-redux';

import { deposit } from '../../actions/sessionActions';
import Deposit from './Deposit'

const mapStateToProps = (state) => {
    return {
        user: state.session.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (depositAmt) => dispatch(deposit(depositAmt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);