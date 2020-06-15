import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import NavHeader from './navigation/NavHeader'
import Home from './navigation/Home'
import Prices from './navigation/Prices'
import AboutUs from './navigation/AboutUs'
import Signin from '../auth/Signin'
import Markets from './navigation/products/Markets'
import Wallet from './navigation/products/Wallet'
import Registration from '../auth/Registration'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <NavHeader />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/prices" component={Prices} />
                    <Route path="/markets" component={Markets} />
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/sign-in" component={Signin} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Router>
        )
    }
}
