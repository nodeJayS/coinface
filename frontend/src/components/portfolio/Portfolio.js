import React, { Component } from 'react'

import Balance from './Balance'
import Assets from '../assets/Assets'
import Transactions from './Transactions'
import Deposit from './DepositCont'


export default class Portfolio extends Component {

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
