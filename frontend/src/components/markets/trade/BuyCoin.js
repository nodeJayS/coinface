import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import * as txAPIUtil from '../../../util/tx_util'
import * as assetAPIUtil from '../../../util/asset_util'
import { withRouter } from 'react-router-dom';

class BuyCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: {},
            buyingAmt: 0,
            usdAmount: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCoinData(this.props.coinId)
            .then(res => this.setState({coin: res.coin[0]}))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let quantity = (this.state.usdAmount/this.state.coin['current_price'])
        let coinTx = {
            id: this.state.coin.id,
            quantity: quantity,
            price: this.state.coin['current_price'],
            usdAmount: Number(this.state.usdAmount)
        }
        if (coinTx.quantity > 0) {
            console.log(coinTx)
            txAPIUtil.buyTx(coinTx)
            assetAPIUtil.updateAsset(coinTx)
        } else {
            console.log('Not enough usdBalance.')
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
                
            <Form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Col>
                        <label>Amount</label>
                        <input id="usdAmount" type="number" placeholder="$0.00" onChange={this.handleChange}/>
                    </Col>
                </div>

                <div>
                    <Col>
                        <label>You are buying {this.state.name}</label>
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