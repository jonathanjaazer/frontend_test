import React, {Component} from 'react';
// Import Materialize
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import Layout from './HOC/Layout';
import MyRequest from './Pages/MyRequest';
import CreateRequest from './Pages/CreateRequest';
import Approved from './Pages/Approved';
import Home from './Pages/Home';
import Container from './HOC/Container';
import "./customStyles.css";
import {Switch, Route} from 'react-router-dom';

class App extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();   
    }
    
    render() {
        const NotFound = () => <Container ><h4>Oops!! <br/> Page not found</h4></Container>
        return(
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/create_request" component={CreateRequest}/>
                    <Route path="/my_request" component={MyRequest}/>
                    <Route path="/approved" component={Approved}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
