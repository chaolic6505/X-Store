import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './menuitem.scss';
interface IM extends RouteComponentProps<any> {
	title: string;
	key: number;
	imageUrl: string;
	linkUrl: string;
	size?: string;
}

const SUBTITLE = 'SHOP NOW';
const MenuItem: React.FC<IM> = ({
	title,
	size,
	imageUrl,
	history,
	linkUrl,
	match,
}) => {
	console.log(linkUrl);
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => {
				history.push(`${match.url}${linkUrl}`);
			}}
		>
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

export default withRouter(MenuItem);
