import React from 'react';

import './CustomButton.scss';
interface IButton {
	type?: 'submit' | 'button';
	isGoogleSignIn?: boolean;
	inverted?: boolean;
	onClick?: () => void;
}

const CustomButton: React.FC<IButton> = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
