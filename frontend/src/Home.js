import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Title from './components/Title'
import CoinData from './components/CoinData'
import RegistrationBar from './components/RegistrationBar'


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
                    <RegistrationBar/>
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