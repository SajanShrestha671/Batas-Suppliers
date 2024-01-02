import React from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" data-bs-theme="light">
				<Container>
					<Nav className="mr-auto">
						<LinkContainer to='/'>
							<Navbar.Brand >Batas Suppliers</Navbar.Brand>
						</LinkContainer>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/products'>
							<Nav.Link>Product</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/contact'>
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
					</Nav>
          
					<Nav className="ml-auto">
						<LinkContainer to='/cart'>
							<Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/login'>
							<Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default header;
