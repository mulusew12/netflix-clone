import { logout } from '../../firebase';
import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown, faClose, faList, faRemove, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import net_logo from '../../assets/net_logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Filtered from '../filtered/Filtered';



const Navbar = ({ apiData, setApiData }) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [filterdVideos, setFilteredVideos] = useState([])
  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredVideos(apiData?.filter((cardDisplay) =>
        cardDisplay?.original_title.toLowerCase().includes(searchQuery.toLowerCase())))
    }
    else {
      setFilteredVideos(apiData)
    }
  }, [apiData, searchQuery])
  const navigate = useNavigate()
  const docUrl = import.meta.env.VITE_DOCS_URL;
  const refer = useRef()
  const ref = useRef()
  const [list, setList] = useState(false)
  const [showInput, setShowInput] = useState(false)
  
  



  return (
    <div className="naves" ref={refer}>
      <div className="lefts">
        <div className='logo'>
          <img src={net_logo} alt="" />
        </div>


        <div className={list ? 'li' : 'lis'}>

          <ul ref={ref} >
            <li>Home</li>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Language</li>
            <NavLink to={docUrl} className='docs'>docs</NavLink>
          </ul>

        </div>



      </div>
      {showInput &&
        <div className="input">
          <input onChange={(e)=>setSearchQuery(e.target.value)} type="text" id='name'  placeholder='Search video title...' />
        </div>
      }
      <div className="rights">
        <div className="list">
          {!list ? <FontAwesomeIcon icon={faList} onClick={() => setList(prev => prev === true ? false : true)} />
            : <FontAwesomeIcon icon={faRemove} onClick={() => setList(prev => prev === true ? false : true)} />
          }

        </div>
        <div className="rights-right">
          <FontAwesomeIcon icon={faSearch} onClick={() => setShowInput(prev => prev === true ? false : true)} />
          <p>Children</p>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="user">
          <Link to='./login'> <FontAwesomeIcon icon={faUser} className='use' /></Link>
          <FontAwesomeIcon icon={faCaretDown} />
          <p className='sm' onClick={() => { logout() }} >Sign out of Netflix</p>
        </div>
      </div>

{
  searchQuery !== '' ? (
    <div className='searched'>
      <h1>Searched results</h1>
      
      {
        filterdVideos.filter(cardDisplay => 
          cardDisplay.original_title.toLowerCase().includes(searchQuery.toLowerCase())
        ).length > 0 ? (
          <div className='card'>
            {filterdVideos
              .filter(cardDisplay => 
                cardDisplay.original_title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((cardDisplay, index) => (
                <Filtered 
                  key={index} 
                  title="Now Playing" 
                  category="now_playing" 
                  cardDisplay={cardDisplay} 
                />
              ))
            }
          </div>
        ) : (
          <div className='not-f'> {searchQuery}  not found</div>
        )
      }
    </div>
  ) : null
} 

    </div>
  )
}



export default Navbar
