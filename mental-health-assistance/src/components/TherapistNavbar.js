import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/therapysession.jpeg';

const TherapistNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="therapist-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/TherapistHomepage">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Therapist logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/TherapistHomepage">
              Session Requests
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="profile-link">
              <img
                src={require('../images/moodtrack.jpeg')}
                width="30"
                height="30"
                className="d-inline-block align-top profile-icon"
                alt="Profile"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TherapistNavbar;
