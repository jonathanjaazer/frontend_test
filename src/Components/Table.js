import React from 'react';


const table = (props) => {
	const renderData = props.data.map(data =>
			(<tr>
				<td>{data.crf}</td>
				<td>{data.project}</td>
				<td>{data.amount}</td>
				<td>{data.payee}</td>
				<td>{data.dateCreated}</td>
				<td>{data.dateNeeded}</td>
				<td>{data.status}</td>
        <td><a href="#!" className="waves-effect"><i className="material-icons black-text">visibility</i></a></td>
			</tr>)
	);
	return(
		<table className="striped responsive-table">
        <thead>
          <tr>
              <th>CRF#</th>
              <th>PROJECT</th>
              <th>AMOUNT REQUESTED</th>
              <th>PAYEE</th>
              <th>DATE CREATED</th>
              <th>DATE NEEDED</th>
              <th>STATUS</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
        	{renderData}
        </tbody>
      </table>
	);
}

export default table