// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAS4DO7HzYavDp6DhdvDHJSAnwBuiFCMwk',
	authDomain: 'x-store-3f792.firebaseapp.com',
	databaseURL: 'https://x-store-3f792-default-rtdb.firebaseio.com',
	projectId: 'x-store-3f792',
	storageBucket: 'x-store-3f792.appspot.com',
	messagingSenderId: '592644692044',
	appId: '1:592644692044:web:af8b8bec8945d6d6b63ce9',
	measurementId: 'G-ZF500G8EN0',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
