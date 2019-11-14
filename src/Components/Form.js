import React, {Component} from 'react';
import Row from '../HOC/Row';
import Grid from '../HOC/Grid';
import Input from '../Components/Input';
import TextArea from '../Components/TextArea';
import Panel from '../Components/Panel';
import Collapsible from '../Components/Collapsible';
import RadioButton from '../Components/RadioButton'

import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

class Form extends Component{
	state = {
			projectClass:{
				taxability: ["EWT", "Yes", "No"],
				costType: ["Option1", "Option2", "Option3"],
				vat: ["Yes", "No"]
			}
	}

	componentDidMount(){
        // Auto initialize all the things!
        M.AutoInit();  
	}

	runCollapsibleMapping = (data) => {
		return data.map(collapsible => 
			<Collapsible header={collapsible.header}>
												<Row>
													<label className="col s12">{collapsible.taxability.elementLabel}</label>
													{
														this.state.projectClass.taxability.map(radio => 
															<RadioButton
																className="col s4 m12"
																name="taxability"
																value={radio}
																label={radio}/>
														)
													}
												</Row>
												<Row>
													<div className="input-field col s12">
													    <select>
													      <option value="" disabled selected>Choose your option</option>
													      { 
													      	this.state.projectClass.costType.map(option =>
													      		<option value={option}>{option}</option>
													      	)
													      }
													    </select>
													    <label>{collapsible.costType.elementLabel}</label>
													</div>
												</Row>
												<Row>
													<label className="col s12">{collapsible.vat.elementLabel}</label>
													{
														this.state.projectClass.vat.map(radio =>
															<RadioButton
																className="col s4 m12"
																name="vat"
																value={radio}
																label={radio}/>
														)
													}
												</Row>
			</Collapsible>
		);
	}

	runPanelMapping = (panels) => {
		return panels.map(panel => 
			<Grid className="col s12 m6 l4">
				<Panel
					className="fullHeight"
						header={panel[0]}>
					    {panel[1]}
				</Panel>
			</Grid>
		);
	}

	runFieldMapping = (start, end) => {
		let count = 0;
		return this.props.requestForm.map(data => {
				count = count + 1;
				const {key, config, label, elementType, changed} = data;
				if(count >= start && count <= end){
					    switch(elementType){
							case("file"):
							    return <div className="file-field input-field col s12 m12">
							      <div className="btn red">
							        <span>File</span>
							        <input type={elementType} multiple/>
							      </div>
							      <div className="file-path-wrapper">
							        <input 
							        	className="file-path validate" 
							        	type="text" 
							        	placeholder={label}/>
							      </div>
							    </div>;
							case("textarea"):
								return <TextArea 
									config={config}
									className="input-field col s12 m12" 
									inputclassName="materialize-textarea"
									label={label}
									changed={(event) => changed(event, key)}/>;
							case("object"):
								return this.runCollapsibleMapping(config.value);
							default:
								return <Input 
									config={config}
									className="input-field col s12 m12" 
									inputclassName={(key === "dateNeeded")?"datepicker":""}
									label={label}
									changed={(event) => changed(event, key)}/>
					}			
				}
				return null;
			}
		);
	}

	render(){
		const requestorDetails = this.runFieldMapping(0, 4); 
		const projectDetails = this.runFieldMapping(5, 8);
		let projectClass = this.runFieldMapping(9, 10);
		return( <form className="col s12 m12">
					<Row>
						{
							this.runPanelMapping(
								[
									[
										"Requestor Details",
										requestorDetails
									], 
									[
										"Project Details",
										projectDetails
									]
								]
							)
						}
						<Grid className="col s12 m4">
							<Panel
								className="fullHeight"
								header="Project Class">
								<ul className="collapsible">
									{projectClass}
								</ul>
							</Panel>
						</Grid>
					</Row>
					<Row>
						<Grid className="col s12 m8"/>
						<Grid className="col s12 m4">
						    <a className="col s6 m6 waves-effect btn red buttonWidth">Save</a>
						    <a className="col s6 m6 waves-effect waves-red btn black buttonWidth">Submit</a>
						</Grid>
					</Row>
				</form>
		    	);
	}
}

export default Form