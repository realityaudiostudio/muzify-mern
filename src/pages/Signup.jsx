import React from 'react'
import { useState ,useContext } from 'react';
import './csss/login.css';
import { Link } from 'react-router-dom';


function Signup() {
  
  return (
    
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Signup</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
    <input type="text"  name="name" id="name" placeholder="Enter your name"/>
        <input type="email"  name="email" id="eml" placeholder="Enter ur Email Address"/>
        <input type="password"  id="pswd" placeholder="Enter Your Password"/>
        <input type="password" id="repswd" placeholder="Re-Enter Your Password"/>
        
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru" >Signup</button>
    <Link to='/login'><button className="erangu">Login</button></Link>
    {/* <p>Your Sweet Name is {loginn.name}</p>
    
    <p>Password is {loginn.password}</p>
    <p>The Repassword is {loginn.rePass}</p> */}
    {/* <p {error == true && <small>Timestamp: {data.substring(0, 10)}>Password Mismatch Found</p> */}
   </div>
 
</div>
  )
}

export default Signup