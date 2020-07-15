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

    componentDidMount() {
        this.props.assetData()
        this.props.watchlist()
        this.props.fetchCoinData()
        this.props.getAllTx()
    }

    componentDidUpdate() {
        this.props.getAllTx()
    }

    render() {
        return (
            <div>
                <Balance />
                <Assets />
                <Tx />
                <Deposit />
                <Withdraw />
            </div>
        )
    }
}

export default withRouter(Portfolio)