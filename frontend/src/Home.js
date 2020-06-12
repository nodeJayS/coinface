import Title from './components/Title'
import Header from './components/Header'
import CoinData from './components/CoinData'
import Registration from './components/Registration'

import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />

                <Container>
                    <Title /> 
                </Container>

                <Container>
                    <Registration/>
                </Container>

                <Container>
                    <CoinData />  
                </Container>           
            </>           
        )
    }
}
