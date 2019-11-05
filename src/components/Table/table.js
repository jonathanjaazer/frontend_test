import React from 'react';
import classes from './table.module.css';

const table = (props) => {
    const renderData = props.data.map(data => 
        <tr key={data._id}className={classes.tableRow}>
            <td>{data._id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.createdAt}</td>
        </tr>
    );
    return(
        <table className={classes.table}>
            <tr className={classes.tableRow}>
                <th>ID</th>
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>DATE</th>
            </tr>
            {renderData}
        </table>
    );
}

export default table;