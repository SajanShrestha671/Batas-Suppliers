import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Rating from './rating';

const Product = ({ product }) => {
	return (
		<div>
			<Card className="my-3 p-3 rounded">
				<a href={`/product/${product._id}`}>
					<Card.Img variant="top" src={product.image} />
				</a>
				<Card.Body>
					<a href={`/product/${product._id}`}>
						<Card.Title as='div' className='product-title'>
							<strong>{product.name}</strong>
						</Card.Title>
					</a>

					<Card.Text as='div'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
							color={'#f8e825'}
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
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		numReviews: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};

export default Product;
