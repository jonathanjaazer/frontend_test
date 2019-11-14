import React from 'react';
import SideNav from '../Components/SideNav';

const layout = (props) => {
	return (
		<div>
			<SideNav/>
			{props.children}
		</div>
	);
}

export default layout