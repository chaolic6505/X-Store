import React from 'react';
import { SHOP_DATA } from './ShopData';
import CollectionPreview from '../../components/Collection-Preview/CollectionPreview';

const Shop = () => {
	return (
		<div className="shop-page">
			{SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default Shop;
