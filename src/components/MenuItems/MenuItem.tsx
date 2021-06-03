import React from 'react';
import './menuitem.scss';
interface IM {
	title: string;
	key: number;
	imageUrl: string;
	size?: string;
}
const SUBTITLE = 'SHOP NOW';
const MenuItem: React.FC<IM> = ({ title, size, imageUrl }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">{SUBTITLE}</span>
			</div>
		</div>
	);
};

export default MenuItem;
