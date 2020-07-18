import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button'


class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {}
            this.createTable = this.createTable.bind(this)
    }

    getAssetNames = () => {
        let assetNames = []
        for (let i = 0; i < this.props.assets.length; i++) {
            let asset = (this.props.assets[i].name)
            let assetExist = this.props.coin.find(coin => coin.id === asset)
            if((this.props.assets[i].balance * assetExist['current_price']) > 0.01) {
            assetNames.push(asset)
            }
        }
        return assetNames
    }

    getAssetData = () => {
        let assetNames = this.getAssetNames()
        let coinData = []
        for (let i = 0; i < this.props.coin.length; i++) {
            let foundName = assetNames.find(name => name === this.props.coin[i].id)
            if(foundName) {
                let pushData = this.props.coin[i]
                coinData.push(pushData)
            }
        }
        return coinData
    }

    getTotalBalance = () => {
        let totalBalance = 0 + this.props.usd
        for (let i = 0; i < this.props.assets.length; i++) {
            let assetExist = this.props.coin.find(asset => asset.id === this.props.assets[i].name)
            totalBalance += (assetExist['current_price'] * this.props.assets[i].balance)
        }
        return (Number(totalBalance))
    }

    createTable = () => {
        let assetData = this.getAssetData()
        let totalBalance = this.getTotalBalance()
        return <Table className='assetsTable' responsive size="sm">
            <thead>
                <tr>               
                    <th>Asset</th>
                    <th>Balance</th>
                    <th>Allocation</th>
                    <th>Trade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FontAwesomeIcon icon="dollar-sign"/> USD</td>
                    <td>$ {Number((this.props.usd).toFixed(2)).toLocaleString('en')}</td>
                    {
                        ((Number(this.props.usd)/totalBalance) * 100) < 1 ?
                        <td>{'< 1 %'}</td> :          
                        <td>{((Number(this.props.usd)/totalBalance) * 100).toFixed(2)} %</td>
                    }
                </tr>
                {assetData.map(coin =>
                <tr key={coin.id}>
                    <td><Image src={coin.image} alt={coin.name} width="24" height="24"></Image> {coin.name}</td>
                    <td>
                        $ {(Number((this.props.assets.find(asset => asset.name === coin.id)).balance) * Number(coin['current_price']).toFixed(2)).toLocaleString('en')}
                    </td>
                    {
                        (((Number((this.props.assets.find(asset => asset.name === coin.id)).balance) * Number(coin['current_price']))/totalBalance) * 100) < 1 ?
                        <td>{'< 1 %'}</td> :          
                        <td>
                            {(((Number((this.props.assets.find(asset => asset.name === coin.id)).balance) * Number(coin['current_price']))/totalBalance) * 100).toFixed(2)} %
                        </td>
                        
                    }
                    <td>
                        <Button size='sm' href={`/prices/${coin.id}`}>Trade</Button>
                    </td>
                </tr>
                )}
            </tbody>
        </Table>
    }
    render() {
        if (this.props.usd && this.props.assets && this.props.coin) {
            return (
            <div className='container assets'>
                <div className='assetsTitle'>Your assets</div>
                <this.createTable />
            </div>
            )
        }

        else {
            return (
                <div className='container'>
                    <div className='loadingMsg'>No assets found.</div>
                </div>
            )
        }
    }
}

export default withRouter(Assets)