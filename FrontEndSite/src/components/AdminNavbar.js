import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  return (
    <Navbar expand="lg" className="fixed-top shadow-sm p-3 bg-white">
      <Container>
        <Navbar.Brand as={Link} to="/admin/adminhomepage" className="fw-bold text-primary">
          MindCare Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/admin/adminhomepage"
              className={`fw-semibold mx-2 ${
                location.pathname === "/admin/adminhomepage" ? "active text-primary" : "text-dark"
              }`}
            >
              Requested Therapists
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/userslist"
              className={`fw-semibold mx-2 ${
                location.pathname === "/admin/userslist" ? "active text-primary" : "text-dark"
              }`}
            >
              Users
            </Nav.Link>
            

            {/* User Profile Dropdown */}
            <Dropdown show={showDropdown} onToggle={handleToggle} align="end">
              <Dropdown.Toggle
                as="span"
                onClick={() => setShowDropdown(!showDropdown)}
                className="nav-link d-flex align-items-center"
              >
                <FaUserCircle size={28} className="text-primary ms-3" style={{ cursor: "pointer" }} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="shadow-sm rounded">
                <Dropdown.Item as={Link} to="/admin/adminprofile">View Profile</Dropdown.Item>
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

export default AdminNavbar;
