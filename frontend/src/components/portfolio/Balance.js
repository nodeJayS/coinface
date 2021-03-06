import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getAssetData = this.getAssetData.bind(this)
    }

    getAssetNames = () => {
        let assetNames = ''
        for (let i = 0; i < this.props.assets.length; i++) {
            assetNames += (this.props.assets[i].name + ',')
        }
        return assetNames
    }

    getAssetData = () => {
        let totalBalance = 0 + this.props.usd
        let totalAssets = this.props.assets
            for (let i = 0; i < totalAssets.length; i++) {
                let assetExist = this.props.coins.find(asset => asset.id === this.props.assets[i].name)
                if(assetExist) {
                    totalBalance += (assetExist['current_price'] * this.props.assets[i].balance)
                }
            }
        return (Number((totalBalance).toFixed(2)).toLocaleString('en'))
    }

    render() {
        if(this.props.usd && this.props.assets && this.props.coins) {      
            return (
            <div className='container'>
                <div className='balanceTitle'>
                    Portfolio balance
                </div>
                <div className="totalBalance">
                    $ {this.getAssetData()}
                </div>
            </div>
        )
        }
        else {
            return (
                <div className='container'>
                    <div className='balanceTitle'>
                        Portfolio balance
                    </div>
                    <div className="totalBalance">
                        $ 0
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(Balance)
