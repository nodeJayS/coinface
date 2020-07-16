import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.signoutUser = this.signoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  signoutUser(e) {
      e.preventDefault();
      this.props.signout()
  }

  getLinks() {
    if (this.props.signedIn) {
      return (
        <div className="container">
        <NavbarBrand >
          <NavLink className="logo" href="/dashboard">
            Coinface
          </NavLink>
        </NavbarBrand>

          <Nav>
              <NavLink href="/dashboard">             
                  Home
              </NavLink>

              <NavLink href="../portfolio">
                  Portfolio
              </NavLink>

              <NavLink href="../prices">             
                  Prices
              </NavLink>
          </Nav>
          
          <Nav className="justifyEnd">
              <Button onClick={this.signoutUser}>Sign out</Button>
          </Nav>
        </div>
      )
    } else {
      return (
        <div className="container">
        <NavbarBrand>
          <NavLink className="logo" href="/">
            Coinface
          </NavLink>
        </NavbarBrand>

        <Nav className="navContent">
          <NavLink href="../prices">             
            Prices
          </NavLink>

          <NavDropdown title="Products">
            <NavDropdown.Item href="/markets">Markets</NavDropdown.Item>
            <NavDropdown.Item href="/wallet">Wallet</NavDropdown.Item>
          </NavDropdown>
            
          <NavLink href="../about-us">About Us</NavLink>
        </Nav>
        
        <Nav className="justifyEnd">
            <NavLink href="../sign-in">Sign in</NavLink>
            <Button href="../registration">Register</Button>
        </Nav>
        </div>
      );
    }
}

  render() {
    return (
      <>
      <Navbar className="navheader NavHeader">
        {this.getLinks()}
      </Navbar>
      </>
    )
  }
}