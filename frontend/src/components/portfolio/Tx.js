import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';

class Tx extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.createTxTable = this.createTxTable.bind(this)
    }

    getRecentTx = () => {
        let recentTx = []
        if (this.props.tx.length < 5) {
            for (let i = (this.props.tx.length - 1); i >= (0); i--) {
                let thisTx = this.props.tx[i]
                recentTx.push(thisTx)
            }
        }
        else if (this.props.tx.length) {
            for (let i = (this.props.tx.length - 1); i >= (this.props.tx.length - 5); i--) {
                let thisTx = this.props.tx[i]
                recentTx.push(thisTx)
                }
            }
        return recentTx
    }

    createTxTable = () => {
        let recentTx = this.getRecentTx()
            return (
            <Table responsive size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>USD Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                {recentTx.map(tx =>
                    <tr key={tx['_id']}>
                        <td>{(tx.name).toUpperCase()}</td>
                        <td>{Number((tx.quantity).toFixed(2)).toLocaleString('en')}</td>
                        <td>${(Number((tx.usdAmount).toFixed(2)).toLocaleString('en'))}</td>
                        <td>{tx.transactionType}</td>
                    </tr>
                )}
                </tbody>
            </Table>
            )
    } 

    render() {
        if(this.props.userid && this.props.tx) {
            return (
                <div className='container recentTx' >
                    <div className='watchlistTitle'>Recent Transactions</div>
                    {this.createTxTable()}
                </div>
            )
        }
        else {
            return (
                <div className='container'>
                    <div className='loadingMsg'>No transactions found.</div>
                </div>
            )
        }
    }
}

export default withRouter(Tx)