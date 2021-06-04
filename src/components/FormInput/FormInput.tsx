import React from 'react';
import './FormInput.scss';

interface IForm {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	type: string;
	label: string;
	value: string;
	required: boolean;
}

const FormInput: React.FC<IForm> = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
