import { connect } from 'react-redux';

import Balance from './Balance'

const mapStateToProps = (state) => {
    return {
        usdBalance: state.session.user.usdBalance
    }
} 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deposit: (depositAmt) => dispatch(deposit(depositAmt))
//     }
// }

export default connect(mapStateToProps)(Balance);