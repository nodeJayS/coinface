import React, { Component } from 'react'
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default class SignedInNav extends Component {
  render() {
    return (
      <>
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
            <Button href="../sign-out">Sign out</Button>
        </Nav>
      </>
    )
  }
}