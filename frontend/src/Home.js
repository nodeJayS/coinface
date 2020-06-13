import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Title from './components/Title'
import CoinData from './components/CoinData'
import Registration from './components/Registration'


export default class home extends Component {
    render() {
        return (
            <>
                <Container>
                    <Title /> 
                </Container>

                <Container>
                    <Registration/>
                </Container>

                <Container>
                    <CoinData coinIds='bitcoin,ethereum,chainlink,basic-attention-token'/>  
                </Container>       
            </>
        )
    }
}