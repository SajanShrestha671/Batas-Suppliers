import {
    CART_ADD_ITEM, CART_REMOVE_ITEM
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const cartItems = state.cartItems || [];

            const existItemIndex = cartItems.findIndex((x) => x.product === item.product);

            if (existItemIndex !== -1) {
                return {
                    ...state,
                    cartItems: cartItems.map((x, index) =>
                        index === existItemIndex ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...cartItems, item],
                };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload),
            }

        default:
            return state;
    }
};

