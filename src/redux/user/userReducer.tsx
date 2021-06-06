import firebase from 'firebase/app';
import { Actions } from './userAction';

interface IState {
	currentUser: firebase.User | null;
}

const INITIAL_STATE: IState = {
	currentUser: null,
};

const userReducer = (
	state = INITIAL_STATE,
	action: { type: string; payload: string },
) => {
	switch (action.type) {
		case Actions.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};
export default userReducer;
