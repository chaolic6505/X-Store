import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hats" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
