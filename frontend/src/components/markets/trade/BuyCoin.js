import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom';

import * as txAPIUtil from '../../../util/tx_util'

class BuyCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usdAmount: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let coin = this.props.coin[0]
        let quantity = (this.state.usdAmount/coin['current_price'])
        let coinTx = {
            id: coin.id,
            quantity: quantity,
            price: coin['current_price'],
            usdAmount: Number(this.state.usdAmount)
        }
        if ((this.state.usdAmount < this.props.usdBalance) && (quantity > 0)) {
            txAPIUtil.buyTx(coinTx)
            let assetExist = this.props.assets.find(asset => asset.name === coinTx.id)
            if (assetExist) {   
                console.log('asset exists')         
                this.props.updateAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                this.setState({
                    usdAmount: '',
                })
                }
            else {
                console.log('asset doesnt exist')
                this.props.createAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                }
                this.setState({
                    usdAmount: '',
                })
        } else {
            console.log('Please input a value higher than 0')
        }
    }

    render() {
        return (
        <>
        <Container>
            <Col>
                <h1>
                    Buy
                </h1>
            </Col>
                
            <Form id="Buy-coin-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Col>
                        <label>Amount</label>
                        <input id="usdAmount" value={this.state.usdAmount} type="number" placeholder="$0" onChange={this.handleChange}/>
                    </Col>
                </div>

                <Col>
                    <button className="btn btn-primary" type="submit">
                        Buy
                    </button>
                </Col>
            </Form>
        </Container>
        </>
        )
    }
}

export default withRouter(BuyCoin)