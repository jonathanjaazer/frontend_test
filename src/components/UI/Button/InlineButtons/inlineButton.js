import React from 'react';
import classes from './inlineButtons.module.css';

const button = (props) => {
    return(
        <div className={classes.inlineButton}>
            <button className={classes} onClick={props.clicked}>
                {props.children}
            </button>
        </div>
    )
}

export default button;