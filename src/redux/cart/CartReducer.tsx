import CartActionTypes from './CartTypes';
import { addItemToCart } from './Cart.utils';

export interface IState {
	hidden: true;
	cartItems: [{ id: string; quantity: number }];
}
const INITIAL_STATE: IState = {
	hidden: true,
	cartItems: [{ id: '', quantity: 0 }],
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
		default:
			return state;
	}
};

export default cartReducer;
