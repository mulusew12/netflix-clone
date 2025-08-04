import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCopyright} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className="footer-icons">
       <NavLink className='ic' to=''>
<FontAwesomeIcon icon={faFacebook} className='fa'/>
       </NavLink>
      
             <NavLink className='ic' to='https://t.me/Mule_tg'> 
              <FontAwesomeIcon icon={faTelegram} className='fa'/>

       </NavLink>
       
          <NavLink className='ic' to=''>
  <FontAwesomeIcon icon={faYoutube} className='fa'/>
       </NavLink>
            <NavLink className='ic' to=''>
   <FontAwesomeIcon icon={faLinkedin} className='fa'/>
       </NavLink>
       
           <NavLink className='ic' to='https://github.com/mulusew12/'>
<FontAwesomeIcon icon={faGithub} className='fa'/>
       </NavLink>
     

     
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cockie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copy-right"> 
        <FontAwesomeIcon icon={faCopyright} />
        1997-2025 Netflix, Inc.

      <span>
         Copyright {new Date().getFullYear()} © Mule.Dev All Right Reserved.
      </span>
      
      </p>

    </div>
  )
}

export default Footer