import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

import Title from './components/Title'
import CoinData from './components/CoinData'
import Registration from './components/Registration'


export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coinIds: 'bitcoin,ethereum,chainlink,basic-attention-token'
        }
    }

    // sortBy = (key) => {
    //     this.setState({
    //         coinData: coinData.sort((a, b) => (a[key] > (b[key])))
    //     })
    // }  

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
                    <CoinData
                        coinIds={this.state.coinIds}
                    />  
                </Container>       
            </>
        )
    }
}