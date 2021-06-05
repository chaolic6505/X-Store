interface IState {
	currentUser: firebase.User | null;
}

const INITIAL_STATE: IState = {
	currentUser: null,
};
const Actions = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const userReducer = (state = INITIAL_STATE, action) => {
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
