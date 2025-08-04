import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Player from './Pages/Player/Player'
import Login from './Pages/Login/Login'
 import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Guid from './Pages/guid/Guid'
const App = () => {
  const navigate = useNavigate();

  useEffect(()=>{
  onAuthStateChanged(auth, async(user) => {
  try {
    if (user) {
        console.log("Logged In");
        toast.success("Logged In")
        navigate('/')
    }
    else{
      console.log("Logged out");
       navigate('/login')
    }

  } catch (error) {
    toast.error(error)
  }
  })
  },[])
  return (
   
  
  < div className='app'>
<Toaster/>
   <Routes className = 'route'>
     <Route path='/' element = {<Home/>}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/player/:id' element={<Player/>}/>
     <Route path='/guid' element={<Guid/>}/>

   </Routes>

  </div>

    

 
  )
}

export default App
