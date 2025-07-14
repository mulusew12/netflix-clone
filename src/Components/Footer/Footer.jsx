import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCopyright} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebook} className='fa'/>
        <FontAwesomeIcon icon={faTelegram} className='fa'/>
        <FontAwesomeIcon icon={faInstagram} className='fa'/>
        <FontAwesomeIcon icon={faYoutube} className='fa'/>
        <FontAwesomeIcon icon={faLinkedin} className='fa'/>
        <FontAwesomeIcon icon={faGithub} className='fa'/>
        <FontAwesomeIcon icon={faGit} className='fa'/>
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
      </p>

    </div>
  )
}

export default Footer