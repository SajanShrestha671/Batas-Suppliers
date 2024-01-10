import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../common/card';
import axios from 'axios';
const Homepage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get ('/api/products');
			setProducts (data);
		}
		fetchProducts ();
	}, [])

	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} xl={3}>
						<Link to={`/product/${product._id}`}>
              				<Product product={product} />
						</Link>
					</Col>
				))}
			</Row>
		</div>
	);
};


export default Homepage;
