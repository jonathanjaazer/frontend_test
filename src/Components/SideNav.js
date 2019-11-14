import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/assetlogo.PNG';
import Avatar from '../assets/user1/avatar.jpg';
import Collapsible from './Collapsible';

const sidenav = () => {
	return(
		<div>
			<ul id="slide-out" className="sidenav sidenav-fixed">
				<li>
					<div className="user-view">
				     	<div className="background black">
				        	<img src={Logo} width="100%" alt="megawide"/>
				      	</div>
				      <a href="#user"><img className="circle" src={Avatar} alt="avatar"/></a>
				      <a href="#name"><span className="white-text name">John Doe</span></a>
				      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
			    	</div>
			    </li>
			    <ul className="collapsible">
			    		<Collapsible header={<Link className="black-text" to="/"><b>HOME</b></Link>}/>
				    	<Collapsible header={<b>REQUEST</b>}>
							    <li>
							    	<Link to="/create_request">
							    		<i className="tiny material-icons">description</i>Create Request
							    	</Link>
							    </li>
							    <li>
							    	<Link to="/my_request">
							    		<i className="tiny material-icons">info_outline</i>My Request
							    	</Link>
							    </li>
							    <li>
							    	<Link to="/drafts">
							    		<i className="tiny material-icons">drafts</i>Saved
							    	</Link>
							    </li>
							    <li>
							    	<Link to="/approved">
							    		<i className="tiny material-icons">thumb_up</i>Approved
							    	</Link>
							    </li>
							    <li>
							    	<Link to="/returned">
							    		<i className="tiny material-icons">thumb_down</i>Returned
							    	</Link>
							    </li>
						</Collapsible>
					    <Collapsible header={<b>CHECKS</b>}>
							    <li>
							    	<Link to="/for_released">
							    		<i className="tiny material-icons">description</i>For Release
							    	</Link>
							    </li>
							    <li>
							    	<Link to="/released">
							    		<i className="tiny material-icons">done_all</i>Released
							    	</Link>
							    </li>
					    </Collapsible>
			    </ul>
			</ul>          
		</div>
	);
}

export default sidenav;