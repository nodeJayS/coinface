import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import CoinChart from './CoinChartCont';
import BuyCoin from './trade/BuyCoinCont';
import SellCoin from './trade/SellCoinCont';
import WatchButton from './WatchButtonCont';
import CoinBalance from './CoinBalanceCont';

class CoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinData: [],
            weekData: true
        }
        this.createTitle = this.createTitle.bind(this)
    }

    componentDidMount() {
        this.props.assetData()
        this.props.watchlist()
        this.props.fetchCoinData(this.props.match.params.coinid)
            .then(res => this.setState({coinData: res.coin}))
        this.props.fetchDailyData(this.props.match.params.coinid)
        this.props.fetchWeekData(this.props.match.params.coinid)
        this.props.fetchMonthData(this.props.match.params.coinid)
    }

    createTitle = () => {
        if (this.state.coinData[0]) {
            return (
                <div className='coinHeader row'>
                <div className='container coinPageLeft col-sm row'>
                    <div className='coinImage'><Image src={this.state.coinData[0].image} alt={this.state.coinData[0].name} width="48" height="48"></Image></div>
                    <div className='coinTitle'>{this.state.coinData[0].name}</div>
                    <div className='coinSymbol'>{this.state.coinData[0].symbol.toUpperCase()}</div>
                </div>
                <div className='coinPageRight col-sm'>
                    <div className='coinWatchlist'><WatchButton /></div>
                </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    createTable = () => {
        return (
        <div className='coinlist'>
        <Table responsive size="sm" width="100">
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
        </div>
        )
    }

    render() {
        return (
            <div className='container coinPage'>
                <this.createTitle />
                <div className='container row'>
                    <div className='col'>
                        <CoinChart />
                        <this.createTable />
                    </div>
                    <div className='col col-lg-auto'>
                        <CoinBalance />
                        <BuyCoin />
                        <SellCoin />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CoinPage)