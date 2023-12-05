
import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {BrowserRouter} from "react-router-dom"
import {MdLocalOffer} from "react-icons/md"
 
const Toppar = () => {
  return (
    <>
    <Navbar bg='dark' variant='dark' expand= 'lg'>
        <Container fluid >
             
             <h2 className='text-white'> <MdLocalOffer className='text-warning'/>  
             Free Home deliver into Home..
             
             </h2>
            <Nav className='ms-auto'>

                <LinkContainer  to="/" activeClassName>
                <Nav.Link >
                      Home
                </Nav.Link>

                </LinkContainer>
                <LinkContainer  to="/about" activeClassName>
                <Nav.Link >
                      About Us
                </Nav.Link>

                </LinkContainer>
                <LinkContainer  to="/conatcte" activeClassName>
                <Nav.Link >
                    Contacte
                </Nav.Link>

                </LinkContainer>
                <LinkContainer  to="/policy" activeClassName>
                <Nav.Link >
                    Terms Policy
                </Nav.Link>

                </LinkContainer>
            </Nav>

        </Container>

    </Navbar>
    </>

  )
}

export default Toppar