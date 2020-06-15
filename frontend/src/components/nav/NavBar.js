import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavLink from 'react-bootstrap/NavLink'
import SignedOutNav from './SignedOutNav'
import SignedInNav from './SignedInNav'

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

        <SignedOutNav />

        <SignedInNav />

      </Navbar>
      </>
    )
  }
}
