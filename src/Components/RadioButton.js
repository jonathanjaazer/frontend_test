import React from 'react';


const radio = (props) => {
	return  <p className={props.className}>
		      <label>
		        <input 
		        	name={props.name} 
		        	value={props.value}
		        	checked={props.value}
		        	type="radio"/>
		        <span>{props.label}</span>
		      </label>
		    </p>
}

export default radio