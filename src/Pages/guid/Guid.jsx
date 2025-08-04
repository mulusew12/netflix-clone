import React from 'react'
import './Guid.css'
import { useNavigate } from 'react-router-dom'
const Guid = () => {
    const navigate = useNavigate()
  return (
    <div className='guid'>
      <h1>First You have to Sign up or Login with a valid email</h1>
      <div className="example">
        <h2>Example</h2>
        <p>Name:     <span>Example</span>  </p>
        <p>Email:     <span>Example@gmail.com</span> </p>
        <p>Password:   <span>Your password</span></p>
      </div>
      <button onClick={()=>navigate('/login')}>Go to page</button>
    </div>
  )
}

export default Guid
