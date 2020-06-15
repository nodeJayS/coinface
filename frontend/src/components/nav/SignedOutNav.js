import React, { Component } from 'react'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

export default class SignedOutNav extends Component {
  render() {
    return (
      <>
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
    )
  }
}
