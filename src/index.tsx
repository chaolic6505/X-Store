import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './provider/AuthProvider';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(
	<AuthProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</AuthProvider>,
	document.getElementById('root'),
);
