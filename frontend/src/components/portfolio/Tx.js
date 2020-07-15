import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

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
            <Table responsive size="sm" width="100">
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
                <Container>
                    <div>Recent Transactions</div>
                    {this.createTxTable()}
                </Container>
            )
        }
        else {
            return (
                <div>No transactions found.</div>
            )
        }
    }
}

export default withRouter(Tx)