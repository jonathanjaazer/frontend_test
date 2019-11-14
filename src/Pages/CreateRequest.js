import React,{Component} from 'react';
import Row from '../HOC/Row';
import Form from '../Components/Form';
import Tabs from '../Components/Tabs';

class CreateRequest extends Component{
	state = {
		requestForm: {
			dateNeeded: {
				elementType: "input",
				elementLabel: "Date needed",
				elementConfig: {
					id: "dateNeeded",
					name: "dateNeeded",
					type: "text",
					value: ""
				},
				validation: {
					required: true
				},
				isValid: false,
				isTouched: false
			},
			requestingDepartment: {
				elementType: "input",
				elementLabel: "Requesting department",
				elementConfig: {
					id: "requestingDepartment",
					name: "requestingDepartment",
					type: "text",
					value: ""
				},
				validation: {
					required: true
				},
				isValid: false,
				isTouched: false
			},
			payee: {
				elementType: "input",
				elementLabel: "Payee",
				elementConfig: {
					id: "payee",
					name: "payee",
					type: "text",
					value: ""
				},
				validation: {
					required: true
				},
				isValid: false,
				isTouched: false
			},
			particulars: {
				elementType: "textarea",
				elementLabel: "Particulars",
				elementConfig: {
					id: "particulars",
					name: "particulars",
					type: "text",
					value: ""
				},
				validation: {
					required: true
				},
				isValid: false,
				isTouched: false
			},
			amount: {
				elementType: "input",
				elementLabel: "Amount",
				elementConfig: {
					id: "amount",
					name: "amount",
					type: "text",
					value: ""
				},
				validation: {
					required: true
				},
				isValid: false,
				isTouched: false
			},
			project: {
				elementType: "input",
				elementLabel: "Project",
				elementConfig: {
					id: "project",
					name: "project",
					type: "text",
					value: ""
				},
				validation: {
					required: true
				},
				isValid: false,
				isTouched: false
			},
			subProject: {
				elementType: "input",
				elementLabel: "Sub Project",
				elementConfig: {
					id: "subProject",
					name: "dateNeeded",
					type: "text",
					value: ""
				},
				validation: {
					required: false
				},
				isValid: false,
				isTouched: false
			},
			supportingDocuments: {
				elementType: "file",
				elementLabel: "Supporting Documents",
				elementConfig: {
					id: "supportingDocuments",
					name: "supportingDocuments",
					type: "file"
				},
				validation: {
					required: false
				},
				isValid: false,
				isTouched: false
			},
			projectClass: {
				elementType: "object",
				elementConfig: {
					value: [
						{
							header: "Class 1",
							taxability: {
								elementLabel: "Taxability",
								value: "No"
							},
							costType: {
								elementLabel: "Cost Type",
								value: ""
							},
							vat: {
								elementLabel: "VAT",
								value: ""
							}
						},
					]
				}
			}
		}
	}

	changedHandler = (event, key) => {
		const updatedRequestForm = {...this.state.requestForm};
		const updatedElementConfig = {...updatedRequestForm[key].elementConfig}
		updatedElementConfig.value = event.target.value;
		updatedRequestForm[key].elementConfig = updatedElementConfig;
		this.setState({
			requestForm: updatedRequestForm
		});
	}

	render(){
		const requestFormArray = [];
		for(let key in this.state.requestForm){
			requestFormArray.push({
				key,
				config: {...this.state.requestForm[key].elementConfig},
				label : this.state.requestForm[key].elementLabel,
				elementType: this.state.requestForm[key].elementType,
				changed:this.changedHandler,
				validation: {...this.state.requestForm[key].validation},
				isValid: this.state.requestForm[key].isValid,
				isTouched: this.state.requestForm[key].isTouched
			})
		}

		console.log(this.state.requestForm);
		return(
			<Row className="paddingLeft300">
				<Tabs/>
                   	<div id="test-swipe-1" className="col s12 m12">
                   		<Form requestForm={requestFormArray}/>
                   	</div>
                   <div id="test-swipe-2" className="col s12">NON-PO ITEM</div>
                   <div id="test-swipe-3" className="col s12">REIMBURSEMENTS</div>
                   <div id="test-swipe-4" className="col s12">CASH ADVANCE</div>
			</Row>
		);
	}
}

export default CreateRequest;