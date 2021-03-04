import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function Header() {
  return (
    <div className='Header mb-3'>

      <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>

          <Navbar.Brand> IS322 - Project 1 - John Rezk </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-collapse" />

          <Navbar.Collapse id="navbar-collapse">
            <Nav className="ml-auto">
              <LinkContainer to='/landing-page'>
                <Nav.Link> Landing Page </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/product-list'>
                <Nav.Link> Product List </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </div>
  );
}

export default Header
