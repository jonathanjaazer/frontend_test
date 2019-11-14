import React from 'react';


const input = (props) => {
	return  <div className={props.className}>
			    <input
			    	{...props.config}
			    	className={props.inputclassName}
			    	onChange={props.changed}/>
			    <label 
			    	htmlFor={props.config.id}>
			    	{props.label}
			    </label>
			    <span 
			    	className="helper-text red-text">
			    	{props.optional? "Optional" : null}
			    </span>
			</div>
}

export default input