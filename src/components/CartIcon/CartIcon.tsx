import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/CartActions';
import { selectCartItemsCount } from '../../redux/cart/CartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon: React.FC<{ toggleCartHidden; itemCount }> = ({
	toggleCartHidden,
	itemCount,
}) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
