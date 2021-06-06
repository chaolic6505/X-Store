import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContex';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInSignUp/SignInSignUp';
import CheckoutPage from './pages/CheckOut/CheckOut';

import './App.css';
function App() {
	const currentUser = useContext(AuthContext);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
				/>
			</Switch>
		</div>
	);
}

export default App;
