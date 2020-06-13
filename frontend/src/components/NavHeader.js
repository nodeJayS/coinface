import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import RegistrationModal from './RegistrationModal'
import { Link } from 'react-router-dom'

export default class NavHeader extends Component {
  render() {
    return (
      <>
      <Navbar className="NavHeader" bg="light">
        <NavbarBrand>
          <Link to ="../">
            Coinface
          </Link>
        </NavbarBrand>
        <NavbarToggle />
          <Nav>
            <Nav>
            <Nav.Link as={NavLink} to="../prices">             
                Prices
            </Nav.Link>
            </Nav>
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
