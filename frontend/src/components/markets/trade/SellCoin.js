import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { withRouter } from 'react-router-dom';

class SellCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usdAmount: '',
            balanceWarning: false,
            valueWarning: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCoinQuantity = this.getCoinQuantity.bind(this)

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
        let userAsset = this.props.assets.find(asset => asset.name === coinTx.id)
        if (coinTx.quantity <= 0) {
            this.setState({
                balanceWarning: false,
                valueWarning: true
            })
        }
        else if (userAsset.balance < coinTx.quantity) {
            this.setState({
                balanceWarning: true,
                valueWarning: false
            })
        }
        else {
            if (userAsset.balance > 0) {   
                console.log('asset sold') 
                this.props.newTx(coinTx)        
                this.props.updateSellAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                this.setState({
                    usdAmount: '',
                    balanceWarning: false,
                    valueWarning: false
                    })
            }
            else if (userAsset.balance === coinTx.quantity) {   
                console.log('asset deleted') 
                this.props.newTx(coinTx)        
                this.props.deleteAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                this.setState({
                    usdAmount: '',
                    balanceWarning: false,
                    valueWarning: false
                })
            }
        }
    }

    getCoinQuantity = () => {
        if (this.props.coin) {
            return (
                <div>{this.state.usdAmount/this.props.coin[0]['current_price']} {this.props.coin[0].symbol.toUpperCase()}</div>
            )
        }
        else {
            return (
                <div>0</div>
            )
        }
    }

    render() {
        return (
        <>
        <div className='container assets'>
            <Col>
                <h1 className='assetsTitle'>
                    Sell
                </h1>
            </Col>
                
            <Form id="Sell-coin-form" className='coinTradeForm container justify-content-center' onSubmit={this.handleSubmit}>
            <div className='row d-flex'>
                    <div className="form-group container">
                        <div>
                            <label>Input amount in usd</label>
                        </div>
                        <div>
                            <input className='usdInput' id="usdAmount" value={this.state.usdAmount} type="number" placeholder="$0" onChange={this.handleChange}/>
                        </div>
                        <this.getCoinQuantity/>
                        {this.state.valueWarning ? <div>Amount must be higher than 0.</div> : ''}                    
                        {this.state.balanceWarning ? <div>Not enough {this.props.coin[0].symbol.toUpperCase()} balance.</div> : ''}                    
                        </div>
                    <div className='col'>
                        <button className="btn btn-primary" type="submit">
                            Sell
                        </button>
                    </div>
                </div>
            </Form>
        </div>
        </>
        )
    }
}

export default withRouter(SellCoin)