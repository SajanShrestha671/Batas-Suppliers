import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../common/rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/productActions';
import Loader from '../common/loader';
import Message from '../common/message';

const SingleProductPage = () => {
  const [qty, setQty ] = useState (1);
  const { id } = useParams(); // Use useParams hook to get id directly
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const productDetails = useSelector(state => state.productDetails);
  const { loading,error, product } = productDetails;

  useEffect(() => {
    dispatch( listProductDetails (id));
  }, [dispatch, id]);

  const addToCart = () =>{
    navigate(`/cart/${id}?qty=${qty}`);
  }

  if (loading) {
    return <Loader />;
  }
  if (!product) {
    return (
      <div>
        <p>Product not found</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }

  return (
    <div>
      { loading ? (
                <Loader />
            ) : error ? (
                <Message variant = 'danger'>{error}</Message>
            ) : (
                <div>
                  <Row>
        {/* Product Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>

        {/* Product Details */}
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Product Price, Stock Status, and Add to Cart */}
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item> 
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {
                            [...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))
                            }
                          </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
               )}
              <ListGroup.Item className="text-center">
              <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={addToCart}>
                Add to Cart
              </Button>

              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
                    
    </div>
  )} 
    </div>
  );
};

export default SingleProductPage;
