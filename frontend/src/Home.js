import React, { Component } from 'react'
import Header from './components/Header'
import Title from './components/Title'
import CoinData from './components/CoinData'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Title />
                <CoinData/>
            </div>
        )
    }
}
