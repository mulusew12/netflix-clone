import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import './Filtered.css'
const Filtered = ({cardDisplay, title}) => {
 const myRef = useRef()
    const   handleWheel = (event)=>{
        event.preventDefault();
        myRef.current.scrollLeft+=event.deltaY;
      }
useEffect(()=>{
     myRef.current.addEventListener('wheel', handleWheel)
},[])


  return (
    
       <div className='card-display'>
        <div className="aa" ref={myRef} >
        <Link to={`./player/${cardDisplay.id}`}  className='card-display-item'>
            <img src={`https://image.tmdb.org/t/p/w500/`+cardDisplay.backdrop_path} alt="" />
            <h3>{cardDisplay.original_title}</h3>
        </Link>
        </div>
    </div>
   
  )
}

export default Filtered
