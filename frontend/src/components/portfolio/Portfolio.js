import React, { Component } from 'react'

import Balance from './BalanceCont'
import Assets from '../assets/Assets'
import Tx from './TxCont'
import Deposit from './DepositCont'
import { withRouter } from 'react-router-dom';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.assetData()
        this.props.watchlist()
        this.props.fetchCoinData()
    }

    render() {
        return (
            <div>
                <Balance />
                <Assets />
                <Tx />
                <Deposit />
            </div>
        )
    }
}

export default withRouter(Portfolio)