import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom';

import Balance from '../portfolio/BalanceCont'
import Tx from '../portfolio/TxCont'
import Watchlist from './WatchlistCont'
import Assets from '../assets/AssetsCont'

class Dashboard extends Component {

    componentDidMount() {
        this.props.assetData()
        this.props.watchlist()
        this.props.getAllTx()
        this.props.fetchCoinData()
    }

    render() {
        return (
            <>
                <Container>
                    <Balance />
                    <Watchlist />
                    <Tx />
                    <Assets />
                </Container>
            </>
        )
    }
}

export default withRouter(Dashboard)