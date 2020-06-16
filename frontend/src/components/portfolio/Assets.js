import React, { Component } from 'react'
import { connect } from 'react-redux'

import BuyCoin from '../markets/BuyCoin'
import AssetsList from './AssetsList'

class Assets extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <AssetsList assets={this.props.assets}/>
                <BuyCoin />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        assets: state.market.coins //assets is a prop of this class, market.props is rootReducer's initialState label of coins
    }
}

export default connect(mapStateToProps)(Assets)