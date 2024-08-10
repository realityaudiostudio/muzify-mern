import React from 'react';
import "./navbar.css";
import Logoo from '../../images/logoo.png';
import { Password, ShoppingCart } from "@phosphor-icons/react";
import { Link,useLocation,useNavigate  } from "react-router-dom";
import { useUser } from '../../context/UserContext';

const Navbar = () =>{
  const {user,logout} = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout()
  {
    logout();
    navigate('/');
  }
  return (
    <div className='mainNav'>
        <div className="links">
            <Link className={`routl ${location.pathname === '/products' ? 'active' : ''}`} to='/products'>Products</Link>
            
            <Link className='routl' to='/wish'>WishList</Link>
            <Link className='routl' to='/contact'>Contact</Link>
        </div>
        <div className="lego">
            <img src={Logoo} alt='logo'></img>
            <Link style={{textDecoration: "none"}} to='/'><p>Muzify</p></Link>
        </div>
        <div className="loging">
        <Link to='/profile'><p className='routl'>{user ? `Welcome, ${user.username}` : 'Welcome, Guest'}</p></Link>
          <Link to='/cart' style={{textDecoration: "none",color: "#0E315D"}}><ShoppingCart size={24}></ShoppingCart></Link>
        <Link to='/login'><button className='logbtn' onClick={handleLogout}> {user ? 'Logout' : 'Login'} <Password size={24} /></button></Link>
        </div>
    </div>
  )
}

export default Navbar;