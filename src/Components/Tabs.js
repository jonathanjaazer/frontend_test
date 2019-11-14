import React,{Component} from 'react';
import Grid from '../HOC/Grid';
import Row from '../HOC/Row';

import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

class Tabs extends Component{

  componentDidMount(){
    var tabElems = document.querySelectorAll('.tabs');
    M.Tabs.init(tabElems, {onShow: null});

    //document.querySelector('.tabs-content.carousel').style.height = window.innerHeight + "px";
  }
  render(){
     return (<Row>
              <Grid className="col s12 m12">
                <ul className="tabs no-autoinit transparent">
                  <li className="tab col s3"><a className="active tabColor" href="#test-swipe-1" ><b>PO ITEMS</b></a></li>
                  <li className="tab col s3"><a className="tabColor" href="#test-swipe-2"><b>NON-PO ITEMS</b></a></li>
                  <li className="tab col s3"><a className="tabColor" href="#test-swipe-3"><b>REIMBURSEMENTS</b></a></li>
                  <li className="tab col s3"><a className="tabColor" href="#test-swipe-4"><b>CASH ADVANCE</b></a></li>
                </ul>
              </Grid>
            </Row>);
  }
}

export default Tabs;
        