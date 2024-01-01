import React from 'react';
import {Row, Col} from 'react-bootstrap';
import products from '../../product';
import Product from '../common/product';


const Homepage = () => {
  return (
    <>
    <h1>Latest Poducts</h1>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} xl= {3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default Homepage;
