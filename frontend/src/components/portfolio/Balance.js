import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getTotalBalance = this.getTotalBalance.bind(this)
    }

    getTotalBalance = () => {
        let totalBalance = this.props.usd;
        for (let i = 0; i < this.props.assets.length; i++) {
            totalBalance += this.props.assets[i].balance
        }
        return Number(totalBalance.toFixed(2)).toLocaleString('en')
    }

    render() {
        if(this.props.assets && this.props.usd) {
        return (
            <>
            <div>
                Portfolio balance
            </div>
            <div className="totalBalance">
                $ {this.getTotalBalance()}
            </div>
            </>
        )
        }
        else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default withRouter(Balance)
