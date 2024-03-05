import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios'; // Import axios for making HTTP requests
import "../../css/login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      // Handle successful login (e.g., redirect user, set authentication token)
      console.log(response.data); // For demonstration, you can log the response data
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <Container className="loginContainer d-flex justify-content-center align-items-center vh-80">
      <Row className='w-75'>
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h1 className="text-center mb-4">Login</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='email' className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId='password' className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' name='password' placeholder='Enter password' value={formData.password} onChange={handleChange} />
                </Form.Group>
                <Button variant='primary' type='submit' className="w-100">
                  Login
                </Button>
              </Form>
              <div className="mt-4 text-center">
                Not registered? <a href="/register">Register here</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
