import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import MenuItem from '../MenuItems/MenuItem';
import './directory.scss';
export interface ISection {
	sections: [
		{
			title: string;
			imageUrl: string;
			linkUrl: string;
			id?: number;
			size?: string;
		},
	];
}
const Directory: React.FC<ISection> = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
