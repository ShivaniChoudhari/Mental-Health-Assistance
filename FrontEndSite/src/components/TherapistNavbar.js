import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const TherapistNavbar = () => {
  const location = useLocation(); // Get current route
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  const navItems = [
    { name: 'Requested Sessions', link: '/therapist/homepage' },
    { name: 'Scheduled Sessions', link: '/therapist/scheduled' }
  ];

  return (
    <Navbar expand="lg" className="fixed-top shadow-sm p-3 bg-white">
      <Container>
        <Navbar.Brand as={Link} to="/therapist/homepage" className="fw-bold text-primary">
          MindCare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                as={Link}
                to={item.link}
                key={index}
                className={`fw-semibold mx-2 ${location.pathname === item.link ? 'active text-primary' : 'text-dark'}`}
              >
                {item.name}
              </Nav.Link>
            ))}

            {/* Profile Dropdown */}
            <Dropdown show={showDropdown} onToggle={handleToggle} align="end">
              <Dropdown.Toggle
                as="span"
                onClick={() => setShowDropdown(!showDropdown)}
                className="nav-link d-flex align-items-center"
              >
                <FaUserCircle size={28} className="text-primary ms-3" style={{ cursor: 'pointer' }} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="shadow-sm rounded">
                <Dropdown.Item as={Link} to="/therapist/therapistprofile">View Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/login" className="text-danger">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TherapistNavbar;
