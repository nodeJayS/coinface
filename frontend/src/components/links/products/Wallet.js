import React, { Component } from 'react'

export default class Wallet extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='descHeader'>
                        How does Coinface's wallet work?
                    </div>
                    <div className='descBody'>
                        All server-side processes are made possible thanks to NodeJs, a JavaScript runtime that allows me to execute Javascript code outside of a web browser.
                        I use Express, a minimal Node.js web application framework to set up routes used to direct different actions send from the client-side.
                        All user data is stored using Mongodb, a cross-platform document-oriented database program.
                    </div>
                </div>
            </>
        )
    }
}
