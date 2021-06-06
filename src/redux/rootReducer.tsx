import { combineReducers } from 'redux';
import cartReducer from './cart/CartReducer';

export default combineReducers({
	cart: cartReducer,
});
