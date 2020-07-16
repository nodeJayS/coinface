import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import CoinList from '../markets/CoinListCont'
import DummySignin from '../session/dummy/DummySigninCont'

export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coinIds: 'bitcoin,ethereum,chainlink,basic-attention-token'
        }
    }

    render() {
        return (
            <div className="homePage">
                <Container className="homeTitle d-flex justify-content-center">
                    The face of cryptocurrency.
                </Container>


                <Container className="homeDesc d-flex justify-content-center">
                    Just kidding! Coinface is a cryptocurrency exchange simulator. Sign in to buy, sell and manage your simulated currency!
                </Container>

                <Container className="quickstart d-flex justify-content-center">
                    <DummySignin />
                </Container>

                <Container className="coinlist">
                    <CoinList coinIds={this.state.coinIds} />  
                </Container>
            </div>
        )
    }
}