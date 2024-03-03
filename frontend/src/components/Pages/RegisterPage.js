import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const RegisterPage = () => {
    return (
      <Container className="mt-5">
        <h2 className="mb-3">Registration Form</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    );
  };
  

export default RegisterPage
