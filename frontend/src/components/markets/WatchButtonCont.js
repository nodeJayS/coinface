import { connect } from 'react-redux';

import { updateWL, removeWL } from '../../actions/watchActions'
import WatchButton from './WatchButton'

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        watchlist: state.watchlist.watchlist,
        coin: state.coin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWL: (coin) => dispatch(updateWL(coin)),
        removeWL: (coin) => dispatch(removeWL(coin)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchButton)