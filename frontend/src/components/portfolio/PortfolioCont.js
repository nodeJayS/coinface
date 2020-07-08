import { connect } from 'react-redux';

import { assetData, deposit } from '../../actions/assetActions';
import Portfolio from './Portfolio'

const mapStateToProps = (state) => {
    return {
        user: state.session.user
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        assetData: () => dispatch(assetData()),
        deposit: (depositAmt) => dispatch(deposit(depositAmt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);