import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

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
            if(this.props.assets[i].balance > 0) {
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
        let totalBalance = this.props.usd
        for (let i = 0; i < this.props.assets.length; i++) {
            let assetExist = this.props.coin.find(asset => asset.id === this.props.assets[i].name)
            totalBalance += (assetExist['current_price'] * this.props.assets[i].balance)
        }
        return (Number(totalBalance))
    }

    createTable = () => {
        let assetData = this.getAssetData()
        let totalBalance = this.getTotalBalance()
        return <Table responsive size="sm" width="100">
            <thead>
                <tr>               
                    <th>Asset</th>
                    <th>Balance</th>
                    <th>Allocation</th>
                </tr>
            </thead>
            <tbody>
                {assetData.map(coin =>
                <tr onClick={`/prices/${coin.id}`} key={coin.id}>
                    <td><Image src={coin.image} alt={coin.name} width="24" height="24"></Image> {coin.name}</td>
                    <td>
                        $ {(Number((this.props.assets.find(asset => asset.name === coin.id)).balance) * Number(coin['current_price']).toFixed(2)).toFixed(2).toLocaleString('en')}
                    </td>
                    {
                        (((Number((this.props.assets.find(asset => asset.name === coin.id)).balance) * Number(coin['current_price']))/totalBalance) * 100) < 1 ?
                        <td>{'< 1 %'}</td> :          
                        <td>
                            {(((Number((this.props.assets.find(asset => asset.name === coin.id)).balance) * Number(coin['current_price']))/totalBalance) * 100).toFixed(2)} %
                        </td>
                    }
                </tr>
                )}
            </tbody>
        </Table>
    }
    render() {
        if (this.props.usd && this.props.assets && this.props.coin) {
            return (
            <Container>
                <this.createTable />
            </Container>
            )
        }
        else {
            return <div>Loading...</div>
        }
    }
}

export default withRouter(Assets)