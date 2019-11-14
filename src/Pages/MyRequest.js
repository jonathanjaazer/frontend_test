import React,{Component} from 'react';
import Grid from '../HOC/Grid';
import Row from '../HOC/Row';
import Table from '../Components/Table';
import Panel from '../Components/Panel';
import SearchInput from '../Components/SearchInput';
import {dummyData} from '../dummy';

import {CSSTransitionGroup} from 'react-transition-group';

class MyRequest extends Component{
	state={
		dummyData: dummyData,
		isTabular: false
	}

	handleClick = () => {
		this.setState({
			isTabular: !this.state.isTabular
		});
	}

	render(){
		let count = 0;
		const renderPanel = this.state.dummyData.map(data => {
			count = count + 50;
			return <CSSTransitionGroup
		      transitionName="example"
		      transitionAppear={true}
		      transitionAppearTimeout={count}
		      transitionEnter={false}
		      transitionLeave={false}>
				<Panel 
			 		key={data} 
			 		header={data.crf}>
			 		{data.status}
			 	</Panel>
			</CSSTransitionGroup>
		}
		);
		return(
			<Row className="paddingLeft300">
				<Row>
					<Grid className="col s12 m6 center-align">
						<h4>MY REQUEST</h4>
					</Grid>
					<Grid className="col s12 m6">
						<SearchInput size="col s12 m12"/>
					</Grid>
				</Row>
				<Grid className="col s12 m12">
					{this.state.isTabular ? renderPanel : <Table data={this.state.dummyData}/>}
				</Grid>
				<div className="fixed-action-btn">
				  <button onClick={this.handleClick} className="waves-effect btn-floating btn-large red">
				    <i className="large material-icons">{this.state.isTabular ? "description" : "dashboard"}</i>
				  </button>
				</div>
			</Row>
		);
	}
}

export default MyRequest;