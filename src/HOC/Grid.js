import React from 'react';

const col = (props) => {
	return(<div className={props.className}>
				{props.children}
		</div>);
}

export default col;