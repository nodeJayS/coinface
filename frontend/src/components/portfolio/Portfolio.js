import React, { Component } from 'react'

import Balance from './Balance'
import Assets from '../assets/Assets'
import Transactions from './Transactions'
import Deposit from './DepositCont'
import { withRouter } from 'react-router-dom';


class Portfolio extends Component {

    render() {
        return (
            <div>
                Portfolio with:
                <Balance />
                <Assets />
                <Transactions />
                <Deposit />
            </div>
        )
    }
}

export default withRouter(Portfolio)