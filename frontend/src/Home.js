import React, { Component } from 'react'
import Title from './components/Title'
import Header from './components/Header'
import CoinData from './components/CoinData'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Title />
                <CoinData />
            </>
        )
    }
}
