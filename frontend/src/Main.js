import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import NavHeader from './components/NavHeader'
import Prices from './Prices'
import Home from './Home'


export default class Main extends Component {
    render() {
        return (
            <Router>
                <NavHeader />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/prices" component={Prices} />
                </Switch>
            </Router>
        )
    }
}
