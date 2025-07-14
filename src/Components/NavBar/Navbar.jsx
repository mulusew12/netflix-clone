import { logout } from '../../firebase';


import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown, faClose, faList, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import net_logo from '../../assets/net_logo.jpg'
import { Link } from 'react-router-dom';

const Navebar = () => {
    const refer = useRef()
    const refe = useRef()
    const[list, setList]= useState(false)


    return (


        <div className="naves" ref={refer}>
            <div className="lefts">
                <div className='logo'>
                    <img src={net_logo} alt="" />
                </div>

              <div className="list">
              <FontAwesomeIcon icon={faList} onClick={()=>setList(prev=>prev===true?false:true)} />
              </div>
               <div className={`${!list?"li":'lis'}`}>
               <ul ref={refe}>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse By Language</li>
                    </ul>
               </div>
                 
                    

            </div>
            <div className="rights">
                <div className="rights-right">
                   <FontAwesomeIcon icon={faSearch} />
                  <p>Children</p>
                  <FontAwesomeIcon icon={faBell} />
                </div>
                 <div className="user">
                   <Link to='./login'> <FontAwesomeIcon icon={faUser} className='use'/></Link>
                    <FontAwesomeIcon icon={faCaretDown} />
                    <p className='sm' onClick={()=>{logout()}} >Sign out of Netflix</p>
                </div>
                   

            </div>
        </div>






    )
}



export default Navebar
