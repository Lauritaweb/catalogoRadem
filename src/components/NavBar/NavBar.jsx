import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className="pt-0 px-3 menu">
      <Navbar.Brand href="#home">
        <img src="/img/logo-radem.svg" className="icon-navbar ms-4" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title="Nuestros productos" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/bano">Baño</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/muebles">Muebles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/cocina">Cocina</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/puertas">Puertas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#feature-products">Productos destacados</Nav.Link>
          <Nav.Link href="#">Catálogo PDF</Nav.Link>
          <Nav.Link href="#about-us">Nosotros</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
          <Nav.Link href="#">
            <img src="/img/icons/icon-ig-red.svg" alt="Instagram" />
          </Nav.Link>
          <Nav.Link href="#">
            <img src="/img/icons/icon-wa-red.svg" alt="WhatsApp" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
