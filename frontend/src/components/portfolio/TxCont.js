import { connect } from 'react-redux';

import { getAllTx } from '../../actions/txActions'
import Tx from './Tx'

const mapStateToProps = (state) => {
    return {
        userid: state.session.user.id
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTx: () => dispatch(getAllTx()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tx);