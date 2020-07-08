import React, { Component } from 'react'

import Balance from './BalanceCont'
import Assets from '../assets/Assets'
import Transactions from './Transactions'
import Deposit from './DepositCont'
import { withRouter } from 'react-router-dom';

class Portfolio extends Component {

    componentDidMount() {
        this.props.assetData()
            .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <Balance />
                <Assets />
                <Transactions />
                <Deposit />
            </div>
        )
    }
}

export default withRouter(Portfolio)