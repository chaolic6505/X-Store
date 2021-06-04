import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './header.scss';

const Header: React.FC = () => (
	<div className="header">
		<div className="options">
			<Link className="logo-container" to="/">
				<img alt="Logo" src={Logo} className="logo" />
			</Link>
			<Link className="option" to="/shop">
				<p>SHOP</p>
			</Link>
			<Link className="option" to="/shop">
				<p>CONTACT</p>
			</Link>
		</div>
	</div>
);

export default Header;
