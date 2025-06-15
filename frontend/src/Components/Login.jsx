import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [signUpData, setSignUpData] = useState({
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
      const response = await axios.post('http://localhost:5000/auth/login', signUpData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
        setSignUpData({ email: '', password: '' });
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  const handleReset = () => {
    setSignUpData({ email: '', password: '' });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow p-4 w-100" style={{ maxWidth: '400px' }}>
        <h3 className="text-center fw-bold mb-4">Welcome Back</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="form-email">
            <Form.Label>Email address</Form.Label>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">Log In</Button>
            <Button variant="outline-danger" onClick={handleReset}>Reset</Button>
          </div>

          <div className="text-center mt-3">
            <Link to="/signup" className="text-decoration-none">Don't have an account? Sign Up</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
