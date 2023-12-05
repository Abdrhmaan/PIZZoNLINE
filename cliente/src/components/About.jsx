// Import necessary libraries and components
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// Import images for the about page


// AboutPage component





const About = () => {
  return (

    
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>About Our Food Ordering Service</h2>
          <p>
            Welcome to our online food ordering platform! We are passionate about delivering
            delicious and high-quality meals to your doorstep. Our team of talented chefs
            works hard to create mouthwatering dishes using only the finest ingredients.
          </p>
          <p>
            With our easy-to-use online ordering system, you can browse our menu, customize
            your order, and have it delivered to your home or office in no time.
          </p>
        </Col>
        <Col md={6}>
          
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
      
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            At [Your Restaurant Name], our mission is to provide a convenient and enjoyable
            dining experience for our customers. Whether you're craving a hearty meal or
            a light snack, we have a diverse menu to satisfy your taste buds.
          </p>
          <p>
            We strive to exceed your expectations with every order, ensuring that you receive
            a delicious and freshly prepared meal every time.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
