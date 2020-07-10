import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import './components/fontawesome'
import { AuthRoute, ProtectedRoute } from './util/route_util'
import NavBar from './components/nav/NavBarContainer'
import Home from './components/links/Home'
import Prices from './components/links/Prices'
import AboutUs from './components/links/AboutUs'
import Signin from './components/session/SigninComp'
import Registration from './components/session/RegistrationComp'
import Markets from './components/links/products/Markets'
import Wallet from './components/links/products/Wallet'
import Dashboard from './components/dashboard/DashboardCont'
import Portfolio from './components/portfolio/PortfolioCont'
import CoinPage from './components/markets/CoinPageCont'

export default class Main extends Component {
    render() {
        return (
            <>
            <Router>
                <NavBar />
                <Switch>
                    <AuthRoute exact path="/" component={Home} />
                    <Route exact path="/prices" component={Prices} />
                    <Route exact path="/markets" component={Markets} />
                    <Route exact path="/wallet" component={Wallet} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <AuthRoute exact path="/sign-in" component={Signin} />
                    <AuthRoute exact path="/registration" component={Registration} />
                    
                    <ProtectedRoute path={`/prices/:coinid`} component={CoinPage} />
                    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                    <ProtectedRoute exact path="/portfolio" component={Portfolio} />
                </Switch>
            </Router>
            </>
        )
    }
}
