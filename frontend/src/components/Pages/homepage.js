import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import products from '../../product';
import Product from '../common/card';

const Homepage = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product.id} sm={12} md={6} xl={3}>
            <Link to={`/product/${product.id}`}>
              <Product product={product} />
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Homepage;
