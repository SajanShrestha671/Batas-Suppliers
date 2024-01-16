import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Rating from './rating';

const Product = ({ product }) => {
	return (
		<div>
			<Card className="my-3 p-3 rounded">
				<LinkContainer to={`/products/${product._id}`}>
					<Card.Img variant="top" src={product.image} />
				</LinkContainer>
				<Card.Body>
					<LinkContainer to={`/product/${product._id}`}>
						<Card.Title as='div' className='product-title'>
							<strong>{product.name}</strong>
						</Card.Title>
					</LinkContainer>

					<Card.Text as='div'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</Card.Text>

					<Card.Text as='h3'>${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		numReviews: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};

export default Product;
