import React, { Component } from 'react'
import Header from './components/Header'
import Title from './components/Title'
import Table from './components/Table'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Title />
                <Table />
            </div>
        )
    }
}
