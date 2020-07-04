import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Balance extends Component {
    render() {
        return (
            <div>
            Portfolio balance
            {this.props.usdBalance}
            </div>
        )
    }
}

export default withRouter(Balance)
