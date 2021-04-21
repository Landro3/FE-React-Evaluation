import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

  // Will update No Inc and person icon
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/Home">
          No Inc.
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Link to="/Home">Home</Link>
          <Link to="/Interests">Interests</Link>
          <Link to="/Skills">Skills</Link>
        </Nav>
        <Navbar.Text>
          `icon` username
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}