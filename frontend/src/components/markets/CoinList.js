import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
// import { Sparklines, SparklinesLine } from 'react-sparklines'
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class CoinList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marketData: [],
            coinid: '',
        }
    }

    componentDidMount() {
        this.props.fetchCoinData(this.props.coinIds)
            .then(res => this.setState({marketData: res.coin}))
        this.props.watchlist()
    }

    render() {
    let coinNum = 1;
    return (
        <>
        <Table className="coinTable" responsive striped borderless size="md">
            <thead>
                <tr>               
                <th>#</th>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Change in 24 hrs</th>
                <th>Change in 7 days</th>
                <th>Marketcap</th>
                <th>Trade</th>
                </tr>
            </thead>
            <tbody>
                {this.state.marketData && this.state.marketData.map(coin =>
                
                <tr key={coin.id}>
                    <td>{coinNum++}</td>
                    <td><Image src={coin.image} alt={coin.name} width="24" height="24"></Image></td>
                    <td>{coin.name} - {coin.symbol.toUpperCase()}</td>
                    <td>${Number(coin['current_price']).toFixed(2).toLocaleString('en')}</td>
                    <td className={Number(coin['price_change_percentage_24h_in_currency']) > 0 ? "greenNum" : "redNum"}>{Number(coin['price_change_percentage_24h_in_currency']).toFixed(2)}%</td>
                    <td className={Number(coin['price_change_percentage_7d_in_currency']) > 0 ? "greenNum" : "redNum"}>{Number(coin['price_change_percentage_7d_in_currency']).toFixed(2)}%</td>
                    <td>${coin['market_cap'].toLocaleString('en')}</td>
                    {/* <td><Sparklines data={(coin['sparkline_in_7d']['price'])}><SparklinesLine size="sm"/></Sparklines></td> */}
                    <td><Button href={`/prices/${coin.id}`}>Trade</Button></td>
                </tr>
                )}
            </tbody>
        </Table>
        </>
        )
    }
}

export default withRouter(CoinList)