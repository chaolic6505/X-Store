import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/CartActions';
import { selectCartItems } from '../../redux/cart/CartSelectors';
import './CartDropDown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
