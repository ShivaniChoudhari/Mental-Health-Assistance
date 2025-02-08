import React, { useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Temporary credentials
    const tempCredentials = {
      'user': { email: 'user@gmail.com', password: 'user123' },
      'therapist': { email: 'therapist@gmail.com', password: 'therapist123' }
    };

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === tempCredentials.user.email && password === tempCredentials.user.password) {
        localStorage.setItem('userType', 'user');
        navigate('/homepage');
      } else if (email === tempCredentials.therapist.email && password === tempCredentials.therapist.password) {
        localStorage.setItem('userType', 'therapist');
        navigate('/therapist/homepage');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-page d-flex justify-content-center align-items-center">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Welcome Back</h3>
        
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={loading}
        >
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Login"
          )}
        </Button>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Button variant="link" onClick={() => navigate("/register")}>
            Register here
          </Button>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
