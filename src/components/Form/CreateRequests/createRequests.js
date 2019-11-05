import React from 'react';
import Input from '../../UI/Input/input';
import Button from '../../UI/Button/button';
import classes from './createRequests.module.css';

const createRequests = (props) => {
    const formFieldsArray = [];

    for(let key in props.formFields){
        props.formFields[key].category.map(category => {
            if(category === props.category) {
                formFieldsArray.push({
                    key,
                    config: {...props.formFields[key].elementConfig}
                })
                return
            }
        });
    }

    const renderFields = formFieldsArray.map(field => 
        <Input 
            key={field.key}
            label={props.formFields[field.key].elementLabel}
            config={field.config}
            changed={(event) => props.changed(event, field.key)}/>
    );

    return (
        <form className={classes.form} onSubmit={props.submit}>
            <div className={classes.formHeader}>
                <h6>{props.category}</h6>
            </div>
            {renderFields}
            <Button type="submit" isLoading={props.isLoading}>Submit</Button>
        </form>
    );
}

export default createRequests