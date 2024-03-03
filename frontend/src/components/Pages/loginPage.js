import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import "../../css/login.css"

const LoginPage = () => {
  return (
    <Container className="loginContainer d-flex justify-content-center align-items-center vh-80" >
      <Row className='w-75'>
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h1 className="text-center mb-4">Login</h1>
              <Form>
                <Form.Group controlId='email' className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group controlId='password' className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' />
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
  )
}

export default LoginPage;
