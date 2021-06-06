export const Actions = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = (user: {}) => ({
	type: Actions.SET_CURRENT_USER,
	payload: user,
});
