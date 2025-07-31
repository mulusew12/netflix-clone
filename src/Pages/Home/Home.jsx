import React, { useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';



import CardDisplay from '../../Components/CardDisplay/CardDisplay'
import Navebar from '../../Components/NavBar/Navbar'


import Footer from '../../Components/Footer/Footer';




const Home = () => {
  return (
    <div className='home'>

      <Navebar />
      <div className='imm'>
       {/*  <img src={assets.net_back} alt="" />*/}
        <div className="hero">
        {/* <img src={assets.net_Original} alt="" />*/}
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
        <CardDisplay title="Now Playing" category="now_playing" />
        <CardDisplay title="Popular" category="popular" />
        <CardDisplay title="Top Rating" category="top_rated" />
        <CardDisplay title="Upcoming" category="upcoming" />

        <Footer />
      </div>



    </div>


  )
}

export default Home
