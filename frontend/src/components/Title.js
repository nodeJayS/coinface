import React, { Component } from 'react'
import Registration from './Registration'

export default class Title extends Component {
    render() {
        return (
            <div>
                What Coinbase wishes it was.
                <div>Just kidding! Coinface is a cryptocurrency exchange simulator. Sign in to buy, sell and manage your imaginary internet money! </div>
                <Registration />
            </div>
        )
    }
}
