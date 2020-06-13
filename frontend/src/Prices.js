import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import CoinDataTable from './components/CoinDataTable'

export default class Prices extends Component {
    render() {
        return (
            <>
                <Container>
                    <CoinDataTable />
                </Container>
            </>
        )
    }
}
