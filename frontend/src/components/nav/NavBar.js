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
        <>
        <NavbarBrand>
          <NavLink href="../dashboard">
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
          
          <Nav>
              <Button onClick={this.signoutUser}>Sign out</Button>
          </Nav>
        </>
      )
    } else {
      return (
        <>
        <NavbarBrand>
          <NavLink href="../">
            Coinface
          </NavLink>
        </NavbarBrand>

        <Nav>
            <NavLink href="../prices">             
                Prices
            </NavLink>

            <NavDropdown title="Products">
                <NavLink href="/markets">Markets</NavLink>
                <NavLink href="/wallet">Wallet</NavLink>
            </NavDropdown>
            
            <NavLink href="../about-us">About Us</NavLink>
        </Nav>
        
        <Nav>
            <NavLink href="../sign-in">Sign in</NavLink>
            <Button href="../registration">Get Started</Button>
        </Nav>
        </>
      );
    }
}

  render() {
    return (
      <>
      <Navbar className="NavHeader" bg="light">
        {this.getLinks()}
      </Navbar>
      </>
    )
  }
}