import React,{Component} from 'react';
import Grid from '../HOC/Grid';
import Row from '../HOC/Row';
import Table from '../Components/Table';
import SearchInput from '../Components/SearchInput';
import {dummyData} from '../dummy';

class MyRequest extends Component{
	state={
		dummyData: dummyData
	}

	render(){
		return(
			<Row className="paddingLeft300">
				<Grid className="col s12 m6 center-align">
					<h4>APPROVED</h4>
				</Grid>
				<Grid className="col s12 m6">
					<SearchInput size="col s12 m12"/>
				</Grid>
				<div className="divider"></div>
				<Grid className="col s12 m12">
					<Table data={this.state.dummyData}/>
				</Grid>
			</Row>
		);
	}
}

export default MyRequest;