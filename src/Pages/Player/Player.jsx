import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  const [nameShow, setNameShow] = useState(false)
   const {id} = useParams()
  const[apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
     type: ""

  })


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTgxOWUyNDYyNGU1ODJiNThkMTMxYzYyODZmNWVjNyIsIm5iZiI6MTc0MDAzMjY3Ni4xMjk5OTk5LCJzdWIiOiI2N2I2Y2FhNDlmN2ZiMmE3NDM2NTU5OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NUW52nObisprbLUL98f8IHJD7lQdflFUcBZJqyIyxOY'
    }
  };
  
  
  
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])

 




  return (
    <div className='player'>
     
     <Link to='/'><h2> <FontAwesomeIcon icon={faArrowLeft} /></h2></Link>
     <iframe title='trailers' src={`https://youtube.com/embed/${apiData.key}`} frameBorder="0"
       height='90%' width="90%"  allowFullScreen></iframe>
   
     
     
       <div className='player-info'>
       <p>{apiData.published_at.slice(0,10)}</p>
         <p>{apiData.name}</p>
         <p>{apiData.type}</p>
       </div>

         <div className='player-info-sm'>
       <p>{apiData.published_at.slice(0,10)}</p>
       
       {!nameShow &&     <span className='first' onClick={()=>setNameShow(prev=>prev===true ? false : true)}>{apiData.name.charAt(0)}</span>
      }
     { nameShow && <p onClick={()=>setNameShow(false)}>{apiData.name}</p>}
         <p >{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
