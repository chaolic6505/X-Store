import React, { useState, useCallback } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustonButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

const SignUp = () => {
	const [inputValues, setInputValues] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
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
		const { displayName, email, password, confirmPassword } = inputValues;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			console.log(user);
			await createUserProfileDocument(user, { displayName });

			setInputValues({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={inputValues.displayName}
					handleChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={inputValues.email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={inputValues.password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={inputValues.confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
