import React, { useState } from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { login, signup } from '../../firebase';
import back from './net_back.jpg'
import toast from 'react-hot-toast';

const Login = () => {
  const [state, setState] = useState("Login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (state === "Login") {
        await login(email, password)
      } else {
        await signup(name, email, password)
        toast.success("Account created successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return (
    <div className='login'>
      <img src={back} alt="background" />
      <div className="log">
        <div className="backs">
          <Link to='/guid' className='back'><h2>Help</h2></Link>
        </div>
        <div className="form">
          <h1>{state}</h1>

          <form onSubmit={user_auth}>
            {state === "Sign up" && (
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Enter Name' 
                required 
              />
            )}

            <input 
              type="email"  // Changed to email type for better validation
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Enter Email' 
              required 
            />
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Enter Password' 
              minLength={6}  // Add minimum password length
            />
            <button type='submit'>{state}</button>
          </form>
          
          <div className="check">
            <input type="checkbox" required />  
            <p>By continuing, I agree with services and privacy policy.</p>
          </div>

          <div className="buts">
            {state === 'Sign up' ? (
              <p>Do you have an account? <span onClick={() => setState("Login")}>Login</span></p>
            ) : (
              <p>New to Netflix? <span onClick={() => setState("Sign up")}>Create account</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login