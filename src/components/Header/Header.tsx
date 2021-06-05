import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthContex';
import { auth } from '../../firebase/firebase.util';
import './header.scss';

const Header: React.FC = () => {
	const user = useContext(AuthContext);
	return (
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
				{user ? (
					<div className="option" onClick={() => auth.signOut()}>
						<p>SIGN OUT</p>
					</div>
				) : (
					<Link className="option" to="/signin">
						<p>SIGN IN</p>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
