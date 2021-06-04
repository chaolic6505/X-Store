import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import Shop from './pages/Shop/Shop';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
