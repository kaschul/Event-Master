import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Event Master</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><i className='fa-solid fa-basket-shopping'></i> Basket of Goodies</Nav.Link>
              <Nav.Link href="/login"><i className='fa-solid fa-bullseye'></i> Portal to Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
     </header>
  )
}

export default Header




