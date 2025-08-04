import React, { useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';



import CardDisplay from '../../Components/CardDisplay/CardDisplay'
import Navbar from '../../Components/NavBar/Navbar'


import Footer from '../../Components/Footer/Footer';





const Home = () => {
    const[apiData, setApiData] = useState([])
  return (
    <div className='home'>

      <Navbar apiData = {apiData} setApiData={ setApiData}/>
      <div className='imm'>
      <img src="/net_back.jpg" alt="" />
        <div className="hero">
        
          <div className="title">
            <h3>THE</h3>
            <h1>PROTECTOR</h1>
          </div>
          <p>Discovering his ties to secret
            ancient order, a young man living in  modern Istambul
            embarking on a qusest to save the city from an immoral enemies.
          </p>
          <div className="buts">
            <button className='play'><FontAwesomeIcon icon={faPlay} />Play</button>
            <button className='inf'><FontAwesomeIcon icon={faInfo} className='i' />More info</button>
          </div>
        </div>
      </div>
      <div className="cards">
        <CardDisplay title="Now Playing" category="now_playing" apiData=  {apiData} setApiData={ setApiData}/>
        <CardDisplay title="Popular" category="popular" apiData=  {apiData} setApiData={ setApiData}/>
        <CardDisplay title="Top Rating" category="top_rated" apiData=  {apiData} setApiData={ setApiData}/>
        <CardDisplay title="Upcoming" category="upcoming" apiData=  {apiData} setApiData={ setApiData}/>
        <Footer />
      </div>
    </div>
  )
}

export default Home
