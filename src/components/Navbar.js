import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const [cartCount, setCartCount] = useState(0); // Example state to show cart count

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold" }}>
          SHOPNOW
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0" style={{ gap: '20px' }}>
            {/* Home Link */}
            <Nav.Link as={Link} to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Nav.Link>

            {/* Cart Link */}
            <Nav.Link as={Link} to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
              Cart ({cartCount})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
