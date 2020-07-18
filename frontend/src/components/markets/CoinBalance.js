import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class CoinBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getAssetData = this.getAssetData.bind(this)
        this.getAssetBalance = this.getAssetBalance.bind(this)
    }

    getAssetData = () => {
        let totalBalance = 0
        let totalAssets = this.props.assets.find(asset => asset.name === this.props.coin[0].id)
        if(totalAssets) {
        totalBalance += totalAssets.balance * this.props.coin[0]['current_price']
        }
        return (Number((totalBalance).toFixed(2)).toLocaleString('en'))
    }

    getAssetBalance = () => {
        let assetFound = this.props.assets.find(asset => asset.name === this.props.coin[0].id)
        if(!assetFound) {
            return '0'
        }
        return (Number(assetFound.balance).toFixed(2).toLocaleString('en'))
    }

    render() {
        if(this.props.usdBalance && this.props.assets && this.props.coin) {      
            return (
            <div className='container assets'>
                <div className='coinBalanceTitle'>
                    {this.props.coin[0]['symbol'].toUpperCase()} balance
                </div>
                <div >
                    <div className="coinTotalBalance">$ {this.getAssetData()}</div> 
                    <div className='subCoinBalance'>{this.getAssetBalance()} {this.props.coin[0].symbol.toUpperCase()}</div>
                </div>
                <div className='coinBalanceTitle'>
                    USD balance
                </div>
                <div className="usdTotalBalance">
                    $ {Number((this.props.usdBalance).toFixed(2)).toLocaleString('en')}
                </div>
            </div>
        )
        }
        else {
            return (
                <div className='container assets'>
                    <div className='coinBalanceTitle'>
                        {this.props.match.params.coinid} balance
                    </div>
                    <div className="coinTotalBalance">
                        $ 0
                    </div>
                    <div className='coinBalanceTitle'>
                        USD balance
                    </div>
                    <div className="usdTotalBalance">
                        $ 0
                    </div>
                </div>
            )
        }
    }
}


export default withRouter(CoinBalance)