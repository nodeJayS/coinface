import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Balance from '../portfolio/Balance'

class Dashboard extends Component {
    render() {
        return (
            <>
                <Container>
                    Dashboard with: 
                    <Balance />
                </Container>
            </>
        )
    }
}

export default Dashboard