import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { buyCoin } from '../../actions/marketActions'

class BuyCoin extends Component {
    state = {
        coinName: '',
        coinAmount: 0,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.buyCoin(this.state)
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
                        <label>Coin</label>
                        <input id="coinName" onChange={this.handleChange} type="string" placeholder="coin" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col>
                        <label>Amount</label>
                        <input id="coinAmount" onChange={this.handleChange} type="number" placeholder="$0.00" />
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

const mapDispatchToProps = (dispatch) => {
    return {
        buyCoin: (coin) => dispatch(buyCoin(coin))
    }
}

export default connect(null, mapDispatchToProps)(BuyCoin)