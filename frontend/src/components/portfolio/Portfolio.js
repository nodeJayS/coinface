import React, { Component } from 'react'

import Balance from './Balance'
import Assets from './Assets'
import Transactions from './Transactions'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                Portfolio with:
                <Balance />
                <Assets />
                <Transactions />
            </div>
        )
    }
}
