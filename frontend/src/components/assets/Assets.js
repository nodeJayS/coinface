import React, { Component } from 'react'
import { connect } from 'react-redux'

import AssetsList from './AssetsList'

class Assets extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <AssetsList assets={this.props.assets}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        assets: state.asset.coin //assets is a prop of this class, market.props is rootReducer's initialState label of coins
    }
}

export default connect(mapStateToProps)(Assets)