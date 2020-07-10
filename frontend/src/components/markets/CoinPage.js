import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import BuyCoin from './trade/BuyCoinCont';
import SellCoin from './trade/SellCoinCont';
import WatchButton from './WatchButtonCont'

class CoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinData: [],

        }
        this.createTable = this.createTable.bind(this)
    }

    componentDidMount() {
        this.props.assetData()
        this.props.watchlist()
        this.props.fetchCoinData(this.props.match.params.coinid)
            .then(res => this.setState({coinData: res.coin}))
    }

    createTable = () => {
        return <Table responsive striped borderless size="sm" width="100">
            <thead>
                <tr>               
                <th>Market cap</th>
                <th>Volume (24 hours)</th>
                <th>Circulating supply</th>
                <th>All-time high</th>
                </tr>
            </thead>
            <tbody>
                {this.state.coinData && this.state.coinData.map(coin =>
                <tr key={coin.id}>
                <td>${Number(coin['market_cap']).toLocaleString('en')}</td>
                <td>${Number(coin['total_volume']).toLocaleString('en')}</td>
                <td>{coin['circulating_supply'].toLocaleString('en')} {(coin.symbol).toUpperCase()}</td>
                <td>${Number(coin['ath']).toFixed(2).toLocaleString('en')}</td>
                </tr>)
                }
            </tbody>
        </Table>
    }

    render() {
        return (
            <Container>
                <WatchButton />
                <this.createTable />
                <BuyCoin />
                <SellCoin />
            </Container>
        )
    }
}

export default withRouter(CoinPage)