import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { withRouter } from 'react-router-dom';

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
            userid: this.props.user.id,
            id: coin.id,
            quantity: quantity,
            price: coin['current_price'],
            usdAmount: Number(this.state.usdAmount),
            txType: 'BUY'
        }
        if (quantity > 0) {
            let assetExist = this.props.assets.find(asset => asset.name === coinTx.id)
            if (this.state.usdAmount > this.props.usdBalance) {
                console.log('not enough USD Balance')
            }
            else if (assetExist) {   
                this.props.newTx(coinTx)
                console.log('asset exists, updated asset')         
                this.props.updateAsset(coinTx)
                    .then(() => this.props.history.push(`/prices/${coin.id}`))
                this.setState({
                    usdAmount: '',
                    })
                }
            else {
                this.props.newTx(coinTx)
                console.log('asset doesnt exist, created new asset')
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
        <div className='container assets'>
            <Col>
                <h1 className='assetsTitle'>
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
        </div>
        </>
        )
    }
}

export default withRouter(BuyCoin)