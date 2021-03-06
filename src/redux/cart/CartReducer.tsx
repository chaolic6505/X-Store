import CartActionTypes from './CartTypes';
import { addItemToCart, removeItemFromCart } from './Cart.utils';

export interface IState {
	hidden: true;
	cartItems: [{ id: string; quantity: number }?];
}
const INITIAL_STATE: IState = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (
	state = INITIAL_STATE,
	action: { type: string; payload: { id: string } },
) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem?) => cartItem?.id !== action.payload.id,
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
