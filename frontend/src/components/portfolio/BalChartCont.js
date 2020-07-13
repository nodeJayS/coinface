import { connect } from 'react-redux';

import BalChart from './BalChart'

const mapStateToProps = (state) => {
    return {
        usd: state.assets.usdBalance,
        assets: state.assets.assets,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalChart);