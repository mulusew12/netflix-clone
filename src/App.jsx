import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Player from './Pages/Player/Player'
import Login from './Pages/Login/Login'
 import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
const App = () => {
  const navigate = useNavigate();

  useEffect(()=>{
  onAuthStateChanged(auth, async(user) => {
    if (user) {
        console.log("Logged In");
        navigate('/')
    }
    else{
      console.log("Logged out");
       navigate('/login')
    }
  })
  },[])
  return (
   
  
  < div className='app'>
   <Routes className = 'route'>
     <Route path='/' element = {<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/player/:id' element={<Player/>}/>
   </Routes>

  </div>

    

 
  )
}

export default App
