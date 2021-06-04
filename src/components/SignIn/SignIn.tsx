import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustonButton';

const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const { value, name } = e.target;
};

const SignIn = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={Email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={Password}
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
