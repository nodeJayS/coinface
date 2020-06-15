import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import CoinData from '../markets/CoinData'
import RegHome from '../auth/RegHome'


export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coinIds: 'bitcoin,ethereum,chainlink,basic-attention-token'
        }
    }

    render() {
        return (
            <>
                <Container>
                    <div className="homeTitle">
                        The face of cryptocurrency.
                    </div>
                </Container>

                <Container>
                    <div>
                        Just kidding! Coinface is a cryptocurrency exchange simulator. Sign in to buy, sell and manage your simulated currency!
                    </div>
                </Container>

                <Container>
                    <RegHome/>
                </Container>

                <Container>
                    <CoinData
                        coinIds={this.state.coinIds}
                    />  
                </Container>       
            </>
        )
    }
}