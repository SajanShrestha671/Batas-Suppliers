import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Row, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Message from '../../components/common/message';
import { addToCart, removeFromCart } from '../../actions/cartActions';

const CartPage = () => {
  // Extracting id and qty from URL
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  // Fetching cart items from Redux store
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // Adding item to cart on component mount
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  // Handler to remove item from cart (needs implementation)
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  // Handler for checkout (needs implementation)
  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant='info'>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map(item => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className ="justify-center">
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
            <Button
            type='button'
            className={`btn btn-primary btn-block ${cartItems.length === 0 ? 'disabled' : ''}`}
            onClick={checkoutHandler}
            >
              {cartItems.length === 0 ? 'Cart is Empty' : 'Proceed To Checkout'}
            </Button>

            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
