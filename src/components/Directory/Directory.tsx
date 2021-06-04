import React from 'react';

import { Sections } from './DirectoryData';
import MenuItem from '../MenuItems/MenuItem';
import './directory.scss';

const Directory: React.SFC = () => {
	return (
		<div className="directory-menu">
			{Sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</div>
	);
};

export default Directory;
