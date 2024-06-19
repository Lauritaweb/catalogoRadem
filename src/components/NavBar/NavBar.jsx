import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className="pt-0 px-3 menu">
      <Navbar.Brand href="http://www.radem.com.ar/">
        <img src="http://www.radem.com.ar/catalogo/img/logo-radem.svg" className="icon-navbar ms-4" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/bano" className="fs-6">Baño</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/muebles" className="fs-6">Muebles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/cocina" className="fs-6">Cocina</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/puertas" className="fs-6">Puertas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="#feature-products" className="fs-6">Novedades</Nav.Link>
          <Nav.Link href="#" className="fs-6">Catálogo</Nav.Link>
          <Nav.Link href="http://www.radem.com.ar/#about-us" className="fs-6">Nosotros</Nav.Link>
          <Nav.Link href="#">
            <img src="http://www.radem.com.ar/catalogo/img/icons/icon-ig-red.svg" alt="Instagram" />
          </Nav.Link>
          <Nav.Link href="#">
            <img src="http://www.radem.com.ar/catalogo/img/icons/icon-wa-red.svg" alt="WhatsApp" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
