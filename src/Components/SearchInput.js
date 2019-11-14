import React from 'react';

const search = (props) => {
	return(
	        <div className={`input-field ${props.size}`}>
	          <i className="material-icons prefix">search</i>
	          <input id="search" type="text" className="validate"/>
	          <label htmlFor="search">Search</label>
	        </div>
	);
}

export default search