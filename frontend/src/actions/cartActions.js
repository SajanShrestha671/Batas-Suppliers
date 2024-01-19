import axios from 'axios';
import {
    CART_ADD_ITEM, CART_REMOVE_ITEM,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
        const { data } = await axios.get(`/api/products/${id}`);
        
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });

        // Wait for the state to be updated before storing in localStorage
        const updatedCartItems = getState().cart.cartItems;
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        

};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
 });
 const removedProduct = getState().cart.removedProduct;
 localStorage.setItem( 'cartItems', JSON.stringify(removedProduct));
}