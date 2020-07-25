import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Balance from '../portfolio/BalanceCont'
import Tx from '../portfolio/TxCont'
import Watchlist from './WatchlistCont'
import Assets from '../assets/AssetsCont'

class Dashboard extends Component {

    async componentDidMount() {
        await this.props.fetchCoinData()
        this.props.assetData()
        this.props.watchlist()
        this.props.getAllTx()
    }

    render() {
        if(this.props.userid) {
            return (
                <>
                    <div className='container'>
                        <Balance />
                        <Watchlist />
                    <div className='row'>
                        <div className='col'>
                            <Assets/>
                        </div>
                        <div className='col'>
                            <Tx/>
                        </div>
                    </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <div className='container'>
                    <div className='loadingMsg'>Loading dashboard...</div>
                </div>
            )
        }
    }
}

export default withRouter(Dashboard)