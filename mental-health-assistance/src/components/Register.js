import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const RegisterPage = () => {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "user") {
      navigate("/Homepage");
    } else {
      navigate("/therapist/homepage");
    }
  };

  return (
    <Container className="register-page d-flex justify-content-center align-items-center">
      <Form className="register-form" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Register</h3>
        <Form.Group className="mb-3">
          <Form.Label>Select Role</Form.Label>
          <Form.Select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Normal User</option>
            <option value="therapist">Therapist</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" required />
        </Form.Group>

        {role === "therapist" && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Specialization</Form.Label>
              <Form.Control type="text" placeholder="Enter your specialization" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control type="number" placeholder="Enter years of experience" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>License Number</Form.Label>
              <Form.Control type="text" placeholder="Enter license number" required />
            </Form.Group>
          </>
        )}

        <Button variant="success" type="submit" className="w-100">
          Register
        </Button>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login here</a>.
        </p>
      </Form>
    </Container>
  );
};

export default RegisterPage;
 