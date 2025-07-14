import React, { useState } from 'react'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { login, signup } from '../../firebase';
import back from './net_back.jpg'
const Login = () => {

  const [login, setLogin] = useState("Login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (event) => {
    event.preventDefault();
    if (login === "Login") {
      await login(email, password)
    }
    else {
      await signup(name, email, password)
    }
  }
  return (
    <div className='login'>
      <img src={back} alt="" />
      <div className="log">
        <div className="backs">
          <Link to='/' className='back'>   <h2  >X</h2> </Link>
        </div>
        <div styleName='form'>
          <h1>{login}</h1>
          <form action="">
            {login === "Sign up" ?
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name' required />
              : <></>}

            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' required />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
            <button type='submit' onClick={user_auth}>{login}</button>
          </form>
          <div className="check">
            <input type="checkbox" />
            <p>By continuing, i agree with services and privacy policy.</p>
          </div>

          <div className="bots">

            {login === 'Sign up' ? <p>Do you have an account? <span onClick={() => setLogin("Login")}>Login</span></p>
              : <p>New for Netflix? <span onClick={() => setLogin("Sign up")}>Create account</span></p>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
