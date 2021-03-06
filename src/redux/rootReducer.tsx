import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/CartReducer';
import directoryReducer from './directory/directoryReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
