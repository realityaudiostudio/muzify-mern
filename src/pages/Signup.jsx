import React from 'react'
import { useState ,useContext } from 'react';
import './csss/login.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const[username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin()
  {
    axios.post('http://localhost:4550/users',{
      email,
      username,
      password
    });
    navigate('/login');
  }

  function eml(e)
  {
    setEmail(e.target.value);
  }
  function usrNme(e)
  {
    setUsername(e.target.value);
  }
  function psWr(e)
  {
    setPassword(e.target.value);
  }

  return (
    
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Signup</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
    <input type="text"  name="name" id="name" onChange={usrNme} placeholder="Enter your Username"/>
        <input type="email"  name="email" onChange={eml} id="eml" placeholder="Enter ur Email Address"/>
        <input type="password"  id="pswd" onChange={psWr} placeholder="Enter Your Password"/>
        
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru" onClick={handleLogin} >Signup</button>
    <Link to='/login'><button className="erangu" o>Login</button></Link>
    {/* <p>Your Sweet Name is {loginn.name}</p>
    
    <p>Password is {loginn.password}</p>
    <p>The Repassword is {loginn.rePass}</p> */}
    {/* <p {error == true && <small>Timestamp: {data.substring(0, 10)}>Password Mismatch Found</p> */}
   </div>
 
</div>
  )
}

export default Signup