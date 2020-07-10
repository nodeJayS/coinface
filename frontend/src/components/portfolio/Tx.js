import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router-dom';


class Tx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tx: []
        }
    }

componentDidMount() {
    this.props.getAllTx()
        .then(res => {
            let arr = res.tx
            let arr2 = []
            // Arr2 is a new array with the last 5 tx in res.tx
            for (let i = (arr.length - 1); i > (arr.length - 6); i--) {
                arr2.push(arr[i])
            }
            this.setState({tx: arr2})
        })
    }

    render() {
        return (
            <>
            <div>Recent Transactions</div>
            <Table responsive striped borderless size="sm" width="100">
                <tbody>
                    {this.state.tx && this.state.tx.map(tx =>
                        <tr key={tx['_id']}>
                            <td>{(tx.name).toUpperCase()}</td>
                            <td>{Number(tx.quantity.toFixed(4)).toLocaleString('en')}</td>
                            <td>${tx.usdAmount.toLocaleString('en')}</td>
                            <td>{tx.transactionType}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </>
        )
    }
}

export default withRouter(Tx)