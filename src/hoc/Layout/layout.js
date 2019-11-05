import React from 'react';
import classes from './layout.module.css';
import Navigation from '../../components/Navigation/navigation';

const layout = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.navigation}>
                <Navigation/>
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

export default layout;