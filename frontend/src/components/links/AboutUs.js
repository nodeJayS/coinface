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
                        Github link to this app can be found {githubLink}.
                    </div>
                </div>
            </>
        )
    }
}
