import React, { useContext, useState } from 'react'
import './csss/login.css';
import { Link } from 'react-router-dom';



function Login() {
    
  return (
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Login</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
        <input type="email"  name="email" id="eml" placeholder="Enter ur Username Address"/>
        <input type="password"  id="pswd" placeholder="Enter Your Password"/>
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru">Login</button>
    <Link to='/signup'><button className="erangu">Signup</button></Link>
   </div>

</div>
  )
}

export default Login;