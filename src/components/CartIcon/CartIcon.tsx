import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/CartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

interface ICartIcon {
	toggleCartHidden: () => {};
}
const CartIcon: React.FC<ICartIcon> = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
