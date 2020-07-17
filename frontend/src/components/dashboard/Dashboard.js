import React, { Component } from 'react'
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
                <div className='container'>
                    <Balance />
                    <Watchlist />
                    <div className='row'>
                        <div className='col'>
                            <Assets />
                        </div>
                        <div className='col'>
                            <Tx/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Dashboard)