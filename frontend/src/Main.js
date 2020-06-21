import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import NavBar from './components/nav/NavBar'
import Home from './components/links/Home'
import Prices from './components/links/Prices'
import AboutUs from './components/links/AboutUs'
import Signin from './components/session/SigninComp'
import Registration from './components/session/RegistrationComp'
import Markets from './components/links/products/Markets'
import Wallet from './components/links/products/Wallet'

import Dashboard from './components/dashboard/Dashboard'
import Portfolio from './components/portfolio/Portfolio'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/prices" component={Prices} />
                    <Route path="/markets" component={Markets} />
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/sign-in" component={Signin} />
                    <Route path="/registration" component={Registration} />

                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
            </Router>
        )
    }
}
