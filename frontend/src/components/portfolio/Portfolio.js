import React, { Component } from 'react'

import Balance from './BalanceCont'
import Assets from '../assets/Assets'
import Tx from './TxCont'
import Deposit from './DepositCont'
import { withRouter } from 'react-router-dom';

class Portfolio extends Component {

    componentDidMount() {
        this.props.assetData()
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