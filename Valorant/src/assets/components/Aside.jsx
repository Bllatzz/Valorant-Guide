import React from 'react';
import '../scss/aside.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/valorant_logo.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';   

const Aside = () => {
  return (
    <aside className="aside">
      <ul className="list-unstyled ">
       <li> <img src={logo} alt="Valorant Logo" /> </li>
       <li> <span className='rotate-text'>VALORANT</span> </li>
        
        <li className='line'></li>
        <li className='losangulo' style={{margin:'0 0 30px 0'}}></li>
       <li className='icons'> <a href=""><FontAwesomeIcon icon={faFacebook}  /></a> </li>
       <li className='icons'> <a href=""><FontAwesomeIcon icon={faInstagram}  /></a> </li>
       <li className='icons'><a href=""><FontAwesomeIcon icon={faDiscord}  /></a> </li>
       <li className='icons' style={{margin:'20px 0 35px 0'}}> <a href=""><FontAwesomeIcon icon={faYoutube}  /></a> </li>
       <li className='losangulo'></li>
       <li className='line'></li>
       <li> <span className='rotate-text'>VALORANT</span> </li>

       <li style={{scale:'2'}}><a href=""><FontAwesomeIcon icon={faSignOutAlt}  /></a></li>
      </ul>
    </aside>
  );
};

export default Aside;
