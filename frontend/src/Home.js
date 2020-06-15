import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Title from './components/Title'
import CoinData from './components/markets/CoinData'
import RegHome from './components/auth/RegHome'


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
                    <Title /> 
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