import React from 'react';
import classes from './button.module.css';
import Spinner from '../Spinner/spinner';


const Button = (props) => {
    const buttonStyle = [
        classes.formButton
    ];
    if(props.isLoading)
        buttonStyle.push(classes.loading);

    return(
        <div className={buttonStyle.join(' ')}>
            <button 
                type={props.type} 
                disabled={props.isLoading}>
                {
                    props.isLoading ? 
                        <Spinner isLoading={props.isLoading}/> : props.children
                }
            </button>
        </div>
    );
}

export default Button;