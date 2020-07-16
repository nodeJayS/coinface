import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CoinList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marketData: [],
            filteredData: [],
            coinid: '',
            searchInput: ''
        }
        this.createTable = this.createTable.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value
        })
        this.coinSearch()
    }

    componentDidMount() {
        this.props.fetchCoinData()
            .then(res => this.setState({marketData: res.coin}))
        this.props.watchlist()
    }

    coinSearch = () => {
        let marketData = this.state.marketData
        let newData = marketData.filter(value => {
        return (
            value.id.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
            value.symbol.toLowerCase().includes(this.state.searchInput.toLowerCase())
            );
        })
        this.setState({ filteredData: newData });
    };

    createTable = () => {
        let coinNum = 1
        let coinData;
        if(this.state.searchInput) {
            coinData = this.state.filteredData
        }
        else {
            coinData = this.state.marketData
        }
        return (
            <Table className="coinlist" responsive size="md">
            <thead>
                <tr>               
                <th>#</th>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th className="centerText">24h Change</th>
                <th className="centerText">7d Change</th>
                <th>Marketcap</th>
                <th>Trade</th>
                </tr>
            </thead>
            <tbody>
                {coinData.map(coin =>
                <tr key={coin.id}>
                    <td>{coinNum++}</td>
                    <td><Image src={coin.image} alt={coin.name} width="24" height="24"></Image></td>
                    <td>{coin.name} - {coin.symbol.toUpperCase()}</td>
                    <td>${Number(coin['current_price']).toFixed(2).toLocaleString('en')}</td>
                    <td className={Number(coin['price_change_percentage_24h_in_currency']) > 0 ? "greenNum" : "redNum"}>{Number(coin['price_change_percentage_24h_in_currency']).toFixed(2)}%</td>
                    <td className={Number(coin['price_change_percentage_7d_in_currency']) > 0 ? "greenNum" : "redNum"}>{Number(coin['price_change_percentage_7d_in_currency']).toFixed(2)}%</td>
                    <td>${coin['market_cap'].toLocaleString('en')}</td>
                    <td><Button variant="success" href={`/prices/${coin.id}`}>Trade</Button></td>
                </tr>
                )}
            </tbody>
            </Table>
        )
    }

    render() {
    return (
        <div>
            <div className="searchbar border d-inline-flex p-2">
                <div className="searchstar">
                <FontAwesomeIcon icon="search" />
                </div>
                <input 
                    className="inputsearch"
                    value={this.state.searchInput}
                    onChange={this.handleChange}
                    placeholder={'Search all assets...'}
                />
            </div>
            {this.createTable()}
        </div>
        )
    }
}

export default withRouter(CoinList)