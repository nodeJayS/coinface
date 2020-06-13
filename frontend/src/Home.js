import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Title from './components/Title'
import CoinDataTable from './components/CoinDataTable'
import Registration from './components/Registration'


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
                    <Registration/>
                </Container>

                <Container>
                    <CoinDataTable coinIds={this.state.coinIds}/>  
                </Container>       
            </>
        )
    }
}