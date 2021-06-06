import React from 'react';
import { connect } from 'react-redux';
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/CartActions';
import './CheckOutItem.scss';

const SYMBOLS = {
	DECREMENT: '<',
	INCREMENT: '>',
	REMOVE: 'X',
};
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					{SYMBOLS.DECREMENT}
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					{SYMBOLS.INCREMENT}
				</div>
			</span>
			<span className="price">$ {price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				{SYMBOLS.REMOVE}
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
