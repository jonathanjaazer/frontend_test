import React from 'react';
import classes from './createRequest.module.css';
import Input from '../../UI/Input/input';
import Button from '../../UI/Button/button';

const createRequest = (props) => {
    const fieldsArray = [];
    for(let key in props.formFields){
        fieldsArray.push({
            key,
            config: {...props.formFields[key].elementConfig}
        });
    }

    const renderFields = fieldsArray.map(field => 
        <Input 
            key={field.key}
            label={props.formFields[field.key].elementLabel}
            config={field.config}
            changed={(event) => props.changed(event, field.key)}/>
    );

    return(
        <form className={classes.form} onSubmit={props.submit}>
            <div className={classes.formHeader}>
               <h4>CREATE REQUEST</h4>
            </div>
            {renderFields}
            <Button type="submit" isLoading={props.isLoading}>Submit</Button>
        </form>
    );
}

export default createRequest