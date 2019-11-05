import React, {Component} from 'react';
import classes from './createRequest.module.css';
import FormRequest from '../../components/Form/CreateRequest/createRequest';
import axios from 'axios';


class CreateRequest extends Component{
    state = {
        formFields: {
            firstName: {
                elementType: "input",
                elementLabel: "Firstname",
                elementConfig: {
                    type:"text",
                    id: "firstName",
                    name: "txtfirstName",
                    value: ""
                },
                validation: {
                    required: true
                },
                isValid: false
            },
            lastName: {
                elementType: "input",
                elementLabel: "Lastname",
                elementConfig: {
                    type:"text",
                    id: "lastName",
                    name: "txtlastName",
                    value: ""
                },
                validation: {
                    required: true
                },
                isValid: false
            }
        },
        isLoading: false
    }

    changedHandler = (event, id) =>{
        //immutable formFields{}
        const updatedFormFields = {...this.state.formFields};
        //immutable elementConfig{}
        const updatedElementConfig = {...updatedFormFields[id].elementConfig};
        //insert the value into elementConfig.value
        updatedElementConfig.value = event.target.value;
        //replace the object of updatedFormFields.elementConfig with new elementConfig
        updatedFormFields[id].elementConfig = updatedElementConfig;

        this.setState({
            formFields: updatedFormFields
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({isLoading:true});
        const { firstName, lastName } = this.state.formFields;
        const data = {
            firstName: firstName.elementConfig.value,
            lastName: lastName.elementConfig.value
        }

        axios.post('http://localhost:5000/user', data).then(res => {
            console.log(res.data);
            alert(res.data.message);
            this.clearFields();
        }).catch(error => {
            this.setState({isLoading: false});
            console.log(error);
            alert(error);
        });
        
    }

    clearFields = () => {
        const updatedFormFields = {...this.state.formFields}
        updatedFormFields.firstName.elementConfig.value = "";
        updatedFormFields.lastName.elementConfig.value = "";
        this.setState({
            formFields: updatedFormFields,
            isLoading: false
        });
    }

    render(){
        return(
            <div className={classes.container}>
                <div className={classes.header}>
                        <p className={classes.active}>SUBMIT</p>
                        <small>>></small>
                        <p >EDITING</p>
                        <small>>></small>
                        <p >TO APPROVE</p>
                </div>
                <div className={classes.content}>
                    <FormRequest 
                        formFields={this.state.formFields} 
                        changed={this.changedHandler} 
                        submit={this.submitHandler}
                        isLoading={this.state.isLoading}/>
                </div>
            </div>
        );
    }
}

export default CreateRequest;