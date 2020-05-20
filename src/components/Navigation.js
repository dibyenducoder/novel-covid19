import React from 'react';
import { 
	faViruses , 
	faGlobe , 
	faChartBar,
	faAddressCard

  } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import '../assets/css/nav.css';
import './SideDrawer/Hamburger'; 
import Hamburger from './SideDrawer/Hamburger';
import { tsPropertySignature } from '@babel/types';

const Navigation = props => {

	// const navStyle = 
	// {
	// 	color: 'white' 
	// };

    return (
       <div>
		   <div className="container-Nav">
		   
		   	<div className="humburger__toggleBtn">
				   <Hamburger click={props.HamburgerClickHandler}/>
			   </div>
			 <div className="brand-name">
			 
			 <a href="/"><FontAwesomeIcon icon={faViruses} className="fa-logo"/></a>
			</div>
			<div class="row" />
			{/* <div class="ham-burger">
				<i onclick="myFunction(this)" class="fas fa-bars"></i>
			</div> */}
			
			{/* <div class="logo">
			<View style={{flexDirection: 'row'}}>
 				<Image source={{uri : 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g'}}
   					style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}/></View>

			</div> */}

			<div class="navbar">
				<ul>
					<li><Link to="/"><FontAwesomeIcon icon={faGlobe} className="fa-link"/> World Track</Link></li>
					<li><Link to="/map">
					<Image src="https://www.flaticon.com/premium-icon/icons/svg/1944/1944174.svg" 
					className="india-map"/>
					 India Track</Link></li>
					<li><Link to="/stat"><FontAwesomeIcon icon={faChartBar} className="fa-link"/> Statistics</Link></li>
                    <li><Link to="/about"><FontAwesomeIcon icon={faAddressCard} className="fa-link"/> About</Link></li>
				</ul>
			</div>
		{/* </div> */}
        </div>
        
          {/* <NavLink to="/">Global Track</NavLink>
          <NavLink to="/map">Map Track</NavLink>
          <NavLink to="/stat">Statistics</NavLink>
          <NavLink to="/about">About</NavLink> */}
		   
       </div>
    );
}
 
export default Navigation;