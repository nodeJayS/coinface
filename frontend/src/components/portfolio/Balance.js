import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: []
        };
        this.getAssetNames = this.getAssetNames.bind(this)
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
        let totalBalance = this.props.usd
        for (let i = 0; i < this.props.assets.length; i++) {
            let assetExist = this.props.coins.find(asset => asset.id === this.props.assets[i].name)
            totalBalance += (assetExist['current_price'] * this.props.assets[i].balance)
        }
        return (Number((totalBalance).toFixed(2)).toLocaleString('en'))
    }

    render() {
        if(this.props.assets && this.props.usd && this.props.coins) {      
                return (
                    <>
                    <div>
                Portfolio balance
            </div>
            <div className="totalBalance">
            $ {this.getAssetData()}
            </div>
            </>
        )
        }
        else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default withRouter(Balance)
