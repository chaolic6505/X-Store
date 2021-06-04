import React, { useState, useCallback } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustonButton';

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
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
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
				<CustomButton type="submit"> Sign in </CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
