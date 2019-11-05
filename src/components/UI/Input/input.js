import React from 'react';
import classes from './input.module.css';


const input = (props) => {
    return(
        <div className={classes.formGroup}>
            <div className={classes.items + ' ' + classes.label}>
                <label htmlFor={props.id}>
                    {props.label}
                </label>
            </div>
            <div className={classes.items + ' ' + classes.input}>
                <input 
                    {...props.config}
                    onChange={props.changed} />
            </div>
        </div>
    );
}

export default input;