import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios'; // First, install axios with `npm install axios`

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password
      });
      alert(response.data.message); // Alert or handle the response appropriately
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to register');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};


export default RegisterPage;
