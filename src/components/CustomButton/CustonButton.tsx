import React from 'react';

import './CustomButton.scss';
interface IButton {
	type?: 'submit' | 'button';
	isGoogleSignIn?: boolean;
	onClick?: () => void;
}

const CustomButton: React.FC<IButton> = ({
	children,
	isGoogleSignIn,
	...otherProps
}) => {
	return (
		<button
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
