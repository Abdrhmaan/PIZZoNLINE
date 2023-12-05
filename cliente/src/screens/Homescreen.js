

import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Piss from "../pizza-data"
import Pizza from "../components/Pizza"
import {useDispatch , useSelector} from "react-redux"
import {actionPizza} from "../reducer/actionPizza"

const Homescreen = () => {


  const pissdata =   useSelector ((state) => state.pisseRducer
  )

  const {loading
,pizza
} =  pissdata
  console.log(pizza)
  const dispach = useDispatch()

  useEffect(() => {
    dispach(actionPizza())



  },[dispach])


  return (
 
    <>
    <Container>
      {loading ? <h1> Loading ............</h1> : 
        <Row>
   
        {Piss.map((pizza) => (
          <Col md={4} key={pizza.name}>
         
            <Pizza pizza={pizza} />
          </Col>
        ))}
      </Row>
      
      }
  
      

    </Container>
  </>
  )
}

export default Homescreen