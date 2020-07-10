import { connect } from 'react-redux';

import { updateWL, removeWL } from '../../actions/watchActions'
import WatchStar from './WatchStar'

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        watchlist: state.watchlist.watchlist,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWL: (coin) => dispatch(updateWL(coin)),
        removeWL: (coin) => dispatch(removeWL(coin)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchStar)