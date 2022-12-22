
import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
const Navigationbar = (props) => {
    return(
        <div>
<Navbar id="navbar"collapseOnSelect expand="lg" bg="pink" variant="light" color="pink">
  <Container>
  <Navbar.Brand href="/">Beautiful Image</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href='/appointment'>Book Appointment</Nav.Link>
    
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigationbar