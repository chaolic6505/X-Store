import React from 'react';
import './homepage.scss';

const HomePage: React.FC = () => {
	const SUBTITLE = 'SHOP NOW';
	const HOMEOBJ = ['HATS', 'JACKETS', 'SHOES', 'WOMENS', 'MENS'];
	return (
		<div className="homepage">
			<h1>Welcome to my Homepage</h1>
			<div className="directory-menu">
				{HOMEOBJ.map((obj, i) => {
					return (
						<div className="menu-item">
							<div className="content">
								<div className="title">{obj}</div>
								<span className="subtitle">{SUBTITLE}</span>
							</div>
						</div>
					);
				})}
				{/* <div className="menu-item">
					<div className="content">
						<div className="title">HATS</div>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<div className="title">JACKETS</div>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<div className="title">SHOES</div>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<div className="title">WOMENS</div>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<div className="title">MENS</div>
						<span className="subtitle">SHOP NOW</span>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default HomePage;
