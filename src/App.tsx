import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInSignUp/SignInSignUp';

function App() {
	
	
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/signin" component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
