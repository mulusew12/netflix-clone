import React, { useEffect, useRef, useState } from 'react'
import './CardDisplay.css'
import { Link } from 'react-router-dom'
const CardDisplay = ({category,title}) => {
    
    const myRef = useRef()

    const[apiData, setApiData] = useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTgxOWUyNDYyNGU1ODJiNThkMTMxYzYyODZmNWVjNyIsIm5iZiI6MTc0MDAzMjY3Ni4xMjk5OTk5LCJzdWIiOiI2N2I2Y2FhNDlmN2ZiMmE3NDM2NTU5OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NUW52nObisprbLUL98f8IHJD7lQdflFUcBZJqyIyxOY'
        }
      };
      
   const   handleWheel = (event)=>{
        event.preventDefault();
        myRef.current.scrollLeft+=event.deltaY;
      }
      useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));
        
        myRef.current.addEventListener('wheel', handleWheel)
    
    },[])


     

  return (
    <div className='card-display'>
        <h1>{title}</h1>
        <div className="a"  ref={myRef}>
      {apiData.map((CardDisplay, index)=>{
        return(<Link to={`./player/${CardDisplay.id}`} key={index} className='card-display-items'>

            <img src={`https://image.tmdb.org/t/p/w500/`+CardDisplay.backdrop_path} alt="" />
            <h3>{CardDisplay.original_title}</h3>
        </Link>)
      })}
        </div>
      
    </div>
  )
}

export default CardDisplay
