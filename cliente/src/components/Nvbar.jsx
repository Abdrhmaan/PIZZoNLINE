
import React from 'react'
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {useDispatch , useSelector} from "react-redux"
 import { cartReducer } from '../reducer/cartReducer';
const Nvbar = () => {

  const dispach = useDispatch
  const pisacart = useSelector((state) => state.cartReducer)
 
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand>
                <Image
                  src="images/logo.png"
                  alt="logo"
                  style={{ height: "50px" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
               
                    <LinkContainer to="/">
                      <NavDropdown title = "name" id="basic-nav-dropdown">
                        <LinkContainer to="/orders">
                          <NavDropdown.Item>orders</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item
                          
                        >
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </LinkContainer>
           
                    <>
                      {" "}
                      <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/register">
                        <Nav.Link>Register</Nav.Link>
                      </LinkContainer>{" "}
                    </>
         
    
                  <LinkContainer to="/cart">
                    <Nav.Link>Cart :{pisacart.cartitem.length} </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
}

export default Nvbar