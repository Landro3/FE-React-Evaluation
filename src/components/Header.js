import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userLogo from '../images/person-fill.svg';
import brandLogo from '../images/NOINC_Logo.svg';
import '../styles/Header.css';

export default function Header() {

  // Will update No Inc and person icon
  return (
    <Navbar expand="lg" variant="dark" style={{padding: 0}}>
      <Navbar.Brand>
        <img src={brandLogo} alt="No Inc. Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <div className="v-sep" />
          <Link to="/Home">Home</Link>
          <div className="v-sep" />
          <Link to="/Interests">Interests</Link>
          <div className="v-sep" />
          <Link to="/Skills">Skills</Link>
        </Nav>
        <div className="v-sep" />
        <Navbar.Text>
          <img src={userLogo} alt="Username Logo" />
          <span>username</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}