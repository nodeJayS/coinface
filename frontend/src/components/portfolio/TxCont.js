import { connect } from 'react-redux';

import Tx from './Tx'

const mapStateToProps = (state) => {
    return {
        userid: state.session.user.id,
        tx: state.transactions.transactions
    }
} 
export default connect(mapStateToProps)(Tx);