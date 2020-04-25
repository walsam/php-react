import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Books</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;