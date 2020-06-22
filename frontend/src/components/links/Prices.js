import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import CoinList from '../markets/CoinListCont'

export default class Prices extends Component {
    render() {
        return (
            <>
                <Container>
                    <CoinList />
                </Container>
            </>
        )
    }
}
