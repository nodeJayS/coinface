import React, { Component } from 'react'

import AssetsList from './AssetsList'

export default class Assets extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <AssetsList assets={this.props.assets}/>
            </div>
        )
    }
}