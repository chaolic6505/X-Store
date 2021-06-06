import Logo from '../../assets/logo.png';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

import { AuthContext } from '../../context/AuthContex';
import { auth } from '../../firebase/firebase.util';
import './header.scss';
interface IHeader {
	hidden: boolean;
}
const Header: React.FC<IHeader> = ({ hidden }) => {
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
				<CartIcon />
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
};

const mapStateToProps = ({ cart: { hidden } }) => ({
	hidden,
});

export default connect(mapStateToProps)(Header);
