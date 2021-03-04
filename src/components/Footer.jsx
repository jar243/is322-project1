import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const footerStyling = {
  backgroundColor: '#f5f5f5',
}

function Footer() {
  return (
    <footer className="footer mt-5" style={footerStyling}>
      <Container className="text-muted py-4">

        <Row className="justify-content-md-center text-center">
          <Col md={2} sm={6} className="align-middle">Copyright 2021</Col>
          <Col md={2} sm={6} className="align-middle">Terms and Agreements</Col>
          <Col md={4} sm={12} className="align-middle">Address: 123 Alphabet Avenue, Sesame NY</Col>
          <Col md={4} sm={12} className="align-middle">Phone: 123-456-6789</Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;