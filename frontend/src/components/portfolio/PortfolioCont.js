import { connect } from 'react-redux';

import { assetData, deposit } from '../../actions/assetActions';
import { watchlist } from '../../actions/watchActions'

import Portfolio from './Portfolio'

const mapStateToProps = (state) => {
    return {
        user: state.session.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        assetData: () => dispatch(assetData()),
        watchlist: () => dispatch(watchlist()),
        deposit: (depositAmt) => dispatch(deposit(depositAmt)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);