import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom';

class SellCoin extends Component {
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
            userid: this.props.user.id,
            id: coin.id,
            quantity: quantity,
            price: coin['current_price'],
            usdAmount: Number(this.state.usdAmount),
            txType: 'SELL'
        }
        if ((quantity > 0)) {
            // this.props.buyTx(coinTx)
            let userAsset = this.props.assets.find(asset => asset.name === coinTx.id)
            if (userAsset.balance < coinTx.quantity) {
                console.log(`not enough ${coinTx.id}`)
            }
            else if (userAsset.balance > 0) {   
                console.log('asset sold') 
                this.props.newTx(coinTx)        
                this.props.updateSellAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                this.setState({
                    usdAmount: '',
                    })
                }
            else if (userAsset.balance === coinTx.quantity) {   
                console.log('asset deleted') 
                this.props.newTx(coinTx)        
                this.props.deleteAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                this.setState({
                    usdAmount: '',
                    })
            }
        }
        else {
            console.log('Please input a value higher than 0')
        }
    }

    render() {
        return (
        <>
        <Container>
            <Col>
                <h1>
                    Sell
                </h1>
            </Col>
                
            <Form id="Sell-coin-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Col>
                        <label>Amount</label>
                        <input id="usdAmount" value={this.state.usdAmount} type="number" placeholder="$0" onChange={this.handleChange}/>
                    </Col>
                </div>

                <Col>
                    <button className="btn btn-primary" type="submit">
                        Sell
                    </button>
                </Col>
            </Form>
        </Container>
        </>
        )
    }
}

export default withRouter(SellCoin)