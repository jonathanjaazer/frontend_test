import React,{Component} from 'react';
import Container from '../HOC/Container';
import Grid from '../HOC/Grid';
import Row from '../HOC/Row';



class Home extends Component{

	render(){
		return(
			<Container className="paddingLeft300 center-align">
				<Row>
					<Grid className="col s12 m12">
						<h1>WELCOME</h1>
					</Grid>
				</Row>
			</Container>
		);
	}
}

export default Home