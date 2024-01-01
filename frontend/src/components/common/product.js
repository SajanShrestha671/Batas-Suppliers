import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../common/rating';

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>
        <Card.Body>
          <a href={`product/${product._id}`}>
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

export default Product;
