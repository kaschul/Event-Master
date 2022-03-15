import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/"> 
              <Navbar.Brand>Event Master</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/Basket of Goodies">
                  <Nav.Link><i className='fa-solid fa-basket-shopping'></i> Basket of Goodies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Portal to Account"> 
                  <Nav.Link><i className='fa-solid fa-bullseye'></i> Portal to Account</Nav.Link>
                </LinkContainer> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </header>
    )
  }

export default Header




