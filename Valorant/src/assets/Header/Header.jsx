import React from "react";
import '../scss/header.scss'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="d-flex">
      <Navbar className="navBar">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/agents" className={location.pathname.startsWith('/agents') ? 'nav-link active' : 'nav-link'}>AGENTES</Nav.Link>
            <Nav.Link as={Link} to="/maps" className={location.pathname === '/maps' ? 'nav-link active' : 'nav-link'}>MAPAS</Nav.Link>
            <Nav.Link as={Link} to="/weapons" className={location.pathname === '/weapons' ? 'nav-link active' : 'nav-link'}>ARMAS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
