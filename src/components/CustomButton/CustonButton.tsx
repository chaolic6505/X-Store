import React from 'react';

import './CustomButton.scss';
interface IButton {
	type: 'submit';
}

const CustomButton: React.FC<IButton> = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
