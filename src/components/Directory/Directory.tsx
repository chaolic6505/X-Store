import React from 'react';
import { Sections } from './Data';
import MenuItem from '../MenuItems/MenuItem';
import './directory.scss';

const Directory: React.FC = () => {
	return (
		<div className="directory-menu">
			{Sections.map(({ title, imageUrl, size, id }) => {
                
				return <MenuItem size={size} key={id} title={title} imageUrl={imageUrl} />;
			})}
		</div>
	);
};

export default Directory;
