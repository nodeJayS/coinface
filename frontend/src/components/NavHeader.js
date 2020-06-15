import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

export default class NavHeader extends Component {
  render() {
    return (
      <>
      <Navbar className="NavHeader" bg="light">
        <NavbarBrand>
          <NavLink href="/">
            Coinface
          </NavLink>
        </NavbarBrand>
        <NavbarToggle />
          <Nav>
            <NavLink href="../prices">             
                Prices
            </NavLink>
            <NavDropdown title="Markets">
              <NavLink href="Exchange">Exchange</NavLink>
              <NavLink href="Wallet">Wallet</NavLink>
            </NavDropdown>
            <NavLink href="../about-us">About Us</NavLink>
          </Nav>
          <Nav>
            <NavLink href="../sign-in">Sign in</NavLink>
            <Button href="../registration">Get Started</Button>
          </Nav>
      </Navbar>
      </>
    )
  }
}
