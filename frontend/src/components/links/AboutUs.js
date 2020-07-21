import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        let githubLink = <a className='siteLink' href='https://github.com/nodeJayS/coinface'>here</a>
        return (
            <>
                <div className='container'>
                    <div className='descHeader'>
                        Under construction
                    </div>
                    <div className='descBody'>
                        Hi! I'm Jay and I created this app to show the possibilities of what the MERN full-stack can do.
                        The majority of code for both front and back-end is written in Javascript with a bit of HTML and CSS sprinkled in.
                        MongoDB is used to store user data.
                        Express and Node.js are used to process information and requests from client to server and vice-versa.
                        React/Redux used to develop the client interface.
                        Github link to this app can be found {githubLink}.
                    </div>
                </div>
            </>
        )
    }
}
