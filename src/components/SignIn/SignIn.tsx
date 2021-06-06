import React, { useState, useCallback } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';

const SignIn = () => {
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setInputValues({ ...inputValues, [name]: value });
		},
		[inputValues],
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { email, password } = inputValues;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setInputValues({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={inputValues.email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={inputValues.password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
