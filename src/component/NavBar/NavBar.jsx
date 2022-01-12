import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>          
          <Navbar.Brand href="#home">  Radio Moon </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Blog</Nav.Link>
              <Nav.Link href="#pricing">Nosotros</Nav.Link>              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Descargar Musica</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Vivo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
