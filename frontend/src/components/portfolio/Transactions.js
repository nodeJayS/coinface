import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

import * as txUtil from '../../util/tx_util'

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

componentDidMount() {
    txUtil.getTx()
        // .then(res => this.setState({
        //     transactions: res.data
        // }))
        .then(res => console.log(res.data))
}

    render() {
        return (
            <div>test</div>
            // <Table>
            //     <tbody>
            //         {this.state.transactions.map(tx =>
            //             <tr key={tx.id}>
            //                 <td>{tx.name}</td>
            //                 <td>{tx.quantity}</td>
            //                 <td>{tx.usdAmount}</td>
            //             </tr>
            //         )}
            //     </tbody>
            // </Table>
        )
    }
}
