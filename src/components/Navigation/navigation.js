import React from 'react';
import classes from './navigation.module.css';
import {Link} from 'react-router-dom';

const navigation = () => {
    return (
        <div className={classes.navigation}>
            <li><Link to="/" className={classes.navLink}>TESTING</Link></li>
            <li><Link to="/create_request" className={classes.navLink}>CREATE REQUEST</Link></li>
            <li><Link to="/my_request" className={classes.navLink}>MY REQUEST</Link></li>
            <li><Link to="/reports" className={classes.navLink}>REPORTS</Link></li>
        </div>
    );
}

export default navigation;