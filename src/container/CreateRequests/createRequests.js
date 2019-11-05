import React, {Component} from 'react';
import classes from './createRequests.module.css';
import Form from '../../components/Form/CreateRequests/createRequests';
import InlineButton from '../../components/UI/Button/InlineButtons/inlineButton';

class CreateRequests extends Component{
    state = {
        formFields: {
            dateNeeded: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "input",
                elementLabel: "Date Needed",
                elementConfig: {
                    type: "text",
                    id: "dateNeeded",
                    name: "dateNeeded",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            company: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Company",
                elementConfig: {
                    type: "text",
                    id: "company",
                    name: "company",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            poNumber: {
                category: ["PURCHASE ORDER"],
                elementType: "Input",
                elementLabel: "PO Number",
                elementConfig: {
                    type: "text",
                    id: "poNumber",
                    name: "poNumber",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            project: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Project",
                elementConfig: {
                    type: "text",
                    id: "project",
                    name: "project",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            subProject:  {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Sub Project",
                elementConfig: {
                    type: "text",
                    id: "subProject",
                    name: "subProject",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            particulars: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Particulars",
                elementConfig: {
                    type: "text",
                    id: "particulars",
                    name: "particulars",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            }, 
            payee: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Payee",
                elementConfig: {
                    type: "number",
                    id: "payee",
                    name: "payee",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            amount: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Amount",
                elementConfig: {
                    type: "text",
                    id: "amount",
                    name: "amount",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            },
            supportingDocuments: {
                category: ["PURCHASE ORDER","Non PO","REIMBURSEMENT","CASH ADVANCE"],
                elementType: "Input",
                elementLabel: "Supporting Documents",
                elementConfig: {
                    type: "text",
                    id: "supportingDocuments",
                    name: "supportingDocuments",
                    value: "",
                },
                validation: {
                    required: true
                },
                isValid: false,
                isTouched: false,
            }
        },
        isLoading: false,
        category: "PURCHASE ORDER"
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("form is submit");
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

    clickedHandler = (val) => {
        this.setState({
            category: val
        })
    }
    render(){
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    <InlineButton clicked={() => this.clickedHandler("PURCHASE ORDER")}>Purchase Order</InlineButton>
                    <span>|</span>
                    <InlineButton clicked={() => this.clickedHandler("Non PURCHASE ORDER")}>Non-purchase Order</InlineButton>
                    <span>|</span>
                    <InlineButton clicked={() => this.clickedHandler("REIMBURSEMENT")}>Reimbursement</InlineButton>
                    <span>|</span>
                    <InlineButton clicked={() => this.clickedHandler("CASH ADVANCE")}>Cash Advance</InlineButton>
                </div>
                <div className={classes.content}>
                    <Form
                        category={this.state.category}
                        formFields={this.state.formFields} 
                        changed={this.changedHandler} 
                        submit={this.submitHandler}
                        isLoading={this.state.isLoading}/>
                </div>
            </div>
        );
    }
}

export default CreateRequests