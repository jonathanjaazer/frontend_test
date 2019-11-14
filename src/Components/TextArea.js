import React from 'react';


const textarea = (props) => {
	return  <div className={props.className}>
			    <textarea 
			    	{...props.config}
			    	className={props.inputclassName}
			    	onChange={props.changed}/>
			    <label htmlFor={props.config.id}>{props.label}</label>
			</div>
}

export default textarea