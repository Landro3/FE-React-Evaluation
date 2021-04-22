import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import userLogo from '../images/person-fill.svg';
import brandLogo from '../images/NOINC_Logo.svg';
import '../styles/Header.css';

export default function Header(props) {
  const username = useSelector(state => state.user.userName);

  // Will update No Inc and person icon
  return (
    <Navbar expand="lg" variant="dark" style={{padding: 0}}>
      <Navbar.Brand>
        <Link to="/Home">
          <img src={brandLogo} alt="No Inc. Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavLink className="navLink" activeClassName="active" to="/Home"><div className="homeLink">Home</div></NavLink>
          <NavLink className="navLink" activeClassName="active" to="/Interests"><div className="interestsLink">Interests</div></NavLink>
          <NavLink className="navLink" activeClassName="active" to="/Skills"><div className="skillsLink">Skills</div></NavLink>
        </Nav>
        <div className="v-sep" />
        <Navbar.Text>
          <img src={userLogo} alt="Username Logo" />
          <span>{username}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}