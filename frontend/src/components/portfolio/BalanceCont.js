import { connect } from 'react-redux';

import Balance from './Balance'

const mapStateToProps = (state) => {
    return {
        usd: state.assets.usdBalance,
        assets: state.assets.assets,
    
    }
}

export default connect(mapStateToProps)(Balance);