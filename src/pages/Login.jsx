import React, { useState,useContext } from 'react'
import './csss/login.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../context/UserContext';


function Login() {
    
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();
  const {login} = useUser();

  function usrNme(e)
    {
      setUsername(e.target.value);
    }
    function psWr(e){
      setPassword(e.target.value);
    }

    async function handleLogins()
    {
      const response = await axios.post('http://localhost:4550/login',{
        username,
        password
      })
      if(response.data.success === true)
        {
          login(response.data.usr.username,response.data.usr.email);
          navigate('/');
        }
      }

  return (
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Login</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
        <input type="text" onChange={usrNme} name="username" id="eml" placeholder="Enter ur Username"/>
        <input type="password" onChange={psWr}  id="pswd" placeholder="Enter Your Password"/>
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru" onClick={handleLogins}>Login</button>
    <Link to='/signup'><button className="erangu">Signup</button></Link>
   </div>

</div>
  )
}

export default Login;