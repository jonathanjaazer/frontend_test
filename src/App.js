import React, {Component} from 'react';
import Layout from './hoc/Layout/layout';
import {Route, Switch} from 'react-router-dom';
import CreateRequest from './container/CreateRequest/createRequest';
import CreateRequests from './container/CreateRequests/createRequests';
import MyRequest from './container/MyRequest/myRequest';

class App extends Component {
  render(){
    return(
    <Layout>
      <Switch>
        {/* note:  if you render component to the router <Route path="/approve" component={<ApproveComponent/>}/>    */}
        
        <Route path="/create_request" component={CreateRequests}/>
        <Route path="/my_request" component={MyRequest}/>
        <Route path="/reports">Reports</Route>
        <Route exact path="/" component={CreateRequest}/>
      </Switch>
    </Layout>
    );
  }
}

export default App;
