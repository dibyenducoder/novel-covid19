import React, { useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
// import * as emailjs from 'emailjs-com';
//  import { Text } from "react-native";
import Image from 'react-bootstrap/Image';
import { 
  faCode , 
  faMapMarkerAlt , 
  faGrinHearts ,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithubAlt,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';

import '../assets/css/about.css';
// import FormGroup from 'react-bootstrap/FormGroup';
import ContactForm from './ContactForm';



function About () { 

  const [show, setShow] = useState(false);
  const [countHeart, setCountHeart] = useState(0);
  const [countLike, setCountLike] = useState(0);
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked(value => !value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function OnClickHeart ()
  {
    if (checked) { setCountHeart(countHeart - 1)}
    else setCountHeart(countHeart + 1 );
  }
  
	return(
	<div>
       
    <div className="wrapper">
  		<div className="contain">
    		<div className="img-container">
      			<Image src="https://images.squarespace-cdn.com/content/v1/5524872fe4b04f1005fbd76f/1542425262027-XO37TGIAJNW5FU2BUFJQ/ke17ZwdGBToddI8pDm48kEqYU77Wq5eLQHZ7xu-cvO57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URvObM95-QsRRG85naCflloyCLsKGoVvlga3ypffMTbPtNpR-oeFwj2Ae_lbqFbpxA/IMG-0890.JPG" className="banner-img"/>
        		<Image src="https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/56603123_814507415592214_3444229206324543488_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=rFS9ZCzIMf4AX8pBOKz&_nc_ht=scontent.fccu1-1.fna&oh=56550360470ceccab3ff35f7a0b5bacc&oe=5EE6E028" className="profile-img"/>
      
     		 <div className="share">
        		<ul>
          			<li><a href="https://dibyenducoder.netlify.app/"><FontAwesomeIcon icon={faCode} className="fa" /></a></li>
                <li><a href="https://github.com/dibyenducoder"><FontAwesomeIcon icon={faGithubAlt} className="fa" /></a></li>
					      <li><a href="https://www.facebook.com/profile.php?id=100010988894855"><FontAwesomeIcon icon={faFacebookF} className="fa"/></a></li>
				    </ul>
      		</div>
    		</div>
    
    <div className="content">
      <div className="title">
        <p>Dibyendu</p>
        <p className="text">Computer Science Major</p>
        
        <span class="location"><FontAwesomeIcon icon={faMapMarkerAlt} className="fa"/>India</span>
      </div>
      {/* <div className="follow">follow</div> */}
      <Button className="follow"  onClick={handleShow}>
       Message
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Give me cookies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <ContactForm/>
        </Modal.Body>
       
      </Modal>
     
        
      <div class="data">
              <div class="inner-data">
                <span><FontAwesomeIcon icon={faGrinHearts} className="fa"/></span>
                <p>{countHeart}</p>
              </div>
              
              <div class="inner-data">
                <span><FontAwesomeIcon icon={faHeart} className="fa"/></span>
                <p>{countLike}</p>
              </div>
      </div>
    
     
      {/* <div className="heart">
          <input type="checkbox"/>
      </div> */}
      <label> 
        <div className="heart">
          <input type="checkbox" 
                onClick={ () => OnClickHeart ()} 
                checked={checked}
                onChange={toggleChecked} style={{position: "relative" , top: "-50px", left: "-7px" }} />
        </div>
      </label>

      <label > 
       <div className="like">
          <input type="checkbox" onClick={() => setCountLike(countLike + 1)} style={{position: "relative" , top: "-50px", left: "230px" }}/>
        </div>
      </label>
      
    </div>
    
  </div>
</div>
 </div>
  );

} 
export default About; 
