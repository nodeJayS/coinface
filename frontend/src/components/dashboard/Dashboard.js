import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom';

import Balance from '../portfolio/Balance'

class Dashboard extends Component {

    componentDidMount() {
        this.props.assetData()
    }

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

export default withRouter(Dashboard)