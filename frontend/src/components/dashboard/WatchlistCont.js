import { connect } from 'react-redux';

import Watchlist from './Watchlist'

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        watchlist: state.watchlist.watchlist,
        coin: state.coin
    }
}

export default connect(mapStateToProps)(Watchlist)