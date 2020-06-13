import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import CoinData from './components/CoinData'

export default class Prices extends Component {
    render() {
        return (
            <>
                <Container>
                    <CoinData />
                </Container>
            </>
        )
    }
}
