import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', signUpData);
      if (response.status === 200) {
        navigate('/login');
        setSignUpData({ name: '', email: '', password: '' });
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while signing up. Please try again.');
    }
  };

  const handleReset = () => {
    setSignUpData({ name: '', email: '', password: '' });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-sm p-3 w-100" style={{ maxWidth: '360px' }}>
        <h4 className="text-center fw-semibold mb-3">Sign Up</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="form-name">
            <Form.Label className="small">Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={signUpData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="form-email">
            <Form.Label className="small">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={signUpData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-password">
            <Form.Label className="small">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </Form.Group>

          <div className="d-grid gap-2 mb-2">
            <Button variant="primary" size="sm" type="submit">Sign Up</Button>
            <Button variant="outline-secondary" size="sm" onClick={handleReset}>Reset</Button>
          </div>

          <div className="text-center mb-2">
            <Link to="/login" className="small text-decoration-none">Already have an account? Log In</Link>
          </div>

          <hr className="my-3" />

          <Button variant="light" className="w-100 mb-2 border text-dark small">
            <FaFacebook className="me-2" /> Sign up with Facebook
          </Button>
          <Button variant="light" className="w-100 border text-dark small">
            <FaGoogle className="me-2" /> Sign up with Google
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;
