import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import RegistrationModal from './RegistrationModal'

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
            <NavLink href="../Prices">             
                Prices
            </NavLink>
            <NavDropdown title="Markets">
              <NavDropdown.Item>Exchange</NavDropdown.Item>
              <NavDropdown.Item>Wallet</NavDropdown.Item>
            </NavDropdown>
            <NavLink>About Us</NavLink>
          </Nav>
          <Nav>
            <NavLink>Sign in</NavLink>
            <RegistrationModal />
          </Nav>
      </Navbar>
      </>
    )
  }
}
