import React, { Component } from 'react'
import axios from 'axios';
import CoinTable from './CoinTable'

export default class CoinData extends Component {
    constructor(props) {
        super(props);
        this.state = {
           coinData: [],
        }
        this.getURL = this.getURL.bind(this)
    }
    
    getURL = () => {
        let coinURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h,7d'
        if (this.props.coinIds) {
            const coinIds = `&ids=` + this.props.coinIds;
            coinURL += coinIds;
        }
        return coinURL
    }

    componentDidMount() {
        axios.get(this.getURL())
             .then(res => { 
                this.setState({coinData: res.data})
             })
    }

    render() {
        return (
            <>
                <CoinTable coinData={this.state.coinData}/>
            </>
        )
    }
}
