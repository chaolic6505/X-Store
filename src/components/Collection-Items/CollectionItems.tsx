import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/CartActions';
import { IShopItemType } from '../../pages/Shop/ShopData';
import CustomButton from '../CustomButton/CustonButton';
import './collection-items.scss';

const CollectionItem: React.FC<{item, addItem}> = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
