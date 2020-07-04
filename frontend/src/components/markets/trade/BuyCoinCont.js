import { connect } from 'react-redux';

import { fetchCoinData } from '../../../actions/coinActions';
import { deposit } from '../../../actions/sessionActions';
import BuyCoin from './BuyCoin';

const mapStateToProps = (state) => {
    return {
        usdBalance: state.session.user.usdBalance
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (depositAmt) => dispatch(deposit(depositAmt)),
        fetchCoinData: coin => dispatch(fetchCoinData(coin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyCoin);