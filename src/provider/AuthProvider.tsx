import React from 'react';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth, createUserProfileDocument } from '../firebase/firebase.util';
import { AuthContext } from '../context/AuthContex';

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<firebase.User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
			createUserProfileDocument(firebaseUser, { ...firebaseUser });
			await setUser(firebaseUser);
		});

		return unsubscribe;
	}, [user]);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
