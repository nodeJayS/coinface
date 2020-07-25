import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Balance from './BalanceCont'
import Assets from '../assets/AssetsCont'
import Tx from './TxCont'
import Deposit from './DepositCont'
import Withdraw from './WithdrawCont'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await this.props.fetchCoinData()
        await this.props.assetData()
        this.props.watchlist()
        this.props.getAllTx()
    }

    componentDidUpdate() {
        this.props.getAllTx()
    }

    render() {
        return (
            <div className = 'container'>
                <Balance />
                <div className='row'>
                    <div className='col'>
                        <Assets />
                    </div>
                    <div className='col'>
                        <div className='container bank'>
                            <div className='bankTitle'>Bank routes</div>
                            <div className='bankDesc'>Deposit and withdraw USD in account (WARNING: NOT REAL USD OR BANK ACCOUNT)</div>
                            <div className='bankFunc container row d-flex justify-content-sm-around'>
                                <div ><Deposit className='col col-6'/></div>
                                <div ><Withdraw className='col col-4'/></div>
                            </div>
                        </div>
                        <Tx />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Portfolio)