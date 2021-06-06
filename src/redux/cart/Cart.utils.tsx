export const addItemToCart = (
	cartItems: [{ id: string; quantity: number }?],
	cartItemToAdd: { id: string },
) => {
	const existingCartItem = cartItems.find(
		(cartItem?) => cartItem?.id === cartItemToAdd.id,
	);

	if (existingCartItem) {
		return cartItems.map((cartItem?) =>
			cartItem?.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
