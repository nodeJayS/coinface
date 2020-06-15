import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import NavHeader from './components/NavHeader'
import Home from './Home'
import Prices from './Prices'
import AboutUs from './AboutUs'
import Signin from './components/auth/Signin'
import Exchange from './components/PostLogin/Exchange'
import Wallet from './components/PostLogin/Wallet'
import Registration from './components/auth/Registration'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <NavHeader />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/prices" component={Prices} />
                    <Route path="/exchange" component={Exchange}></Route>
                    <Route path="/wallet" component={Wallet}></Route>
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/sign-in" component={Signin} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Router>
        )
    }
}
