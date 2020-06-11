import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'

export default class indexHeader extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <NavbarBrand>Coinface</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav"/>
        <NavbarCollapse/>
          <Nav>
            <NavLink>Markets</NavLink>
            
            <NavLink>About Us</NavLink>
            <NavLink>Sign in</NavLink>
            <NavLink>Get Started</NavLink>
          </Nav>
      </Navbar>
    )
  }
}
