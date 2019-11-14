import React from 'react';
import Row from '../HOC/Row';


const panel = (props) => {
	return(
		<Row>
		    <div className="col s12 m12">
		      <div className={`card ${props.bgColor} ${props.className}`}>
		        <div className="card-content">
		          <span className="card-title">{props.header}</span>
		          	{props.children}
		        </div>
		      </div>
		    </div>
  		</Row>
	);
}

export default panel;