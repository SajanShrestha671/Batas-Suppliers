import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
const header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" data-bs-theme="light">
        <Container>
          <Nav className="mr-auto">
          <Navbar.Brand href="#home">Batas Suppliers</Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#featuraboutes">About</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
    )
}

export default header
