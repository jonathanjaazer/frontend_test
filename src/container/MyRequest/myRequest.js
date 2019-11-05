import React, {Component} from 'react';
import Table from '../../components/Table/table';
import classes from './myRequest.module.css';
import dummyData from '../dummyAccounts';
import axios from 'axios';

class MyRequest extends Component{
    state ={
        data : dummyData
    }

    componentDidMount(){
        axios.get('http://localhost:5000/user').then((res) => {
            this.setState({
                data: res.data
            });
        });
    }
    render(){
        return(
            <div className={classes.container}>
                <Table data={this.state.data}/>
            </div>
        );
    }
}

export default MyRequest;