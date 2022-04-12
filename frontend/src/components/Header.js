import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
  const logoutHandler = () => {
    dispatch(logout())
  }

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
            
                <LinkContainer to="/cart">
                  <Nav.Link><i className='fa-solid fa-basket-shopping'></i> Basket of Goodies</Nav.Link>
                </LinkContainer>
                  
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Portal to Account</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link><i className='fa-solid fa-bullseye'></i> Sign In</Nav.Link>
                  </LinkContainer>
                )}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }

export default Header




