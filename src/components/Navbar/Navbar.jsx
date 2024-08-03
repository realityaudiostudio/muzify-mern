import React from 'react';
import "./navbar.css";
import Logoo from '../../images/logoo.png';
import { Password, ShoppingCart } from "@phosphor-icons/react";
import { Link,useLocation  } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className='mainNav'>
        <div className="links">
            <Link className={`routl ${location.pathname === '/products' ? 'active' : ''}`} to='/products'>Products</Link>
            
            <Link className='routl' to='/about'>About</Link>
            <Link className='routl' to='/contact'>Contact</Link>
        </div>
        <div className="lego">
            <img src={Logoo} alt='logo'></img>
            <Link style={{textDecoration: "none"}} to='/'><p>Muzify</p></Link>
        </div>
        <div className="loging">
          <Link to='/cart' style={{textDecoration: "none",color: "#0E315D"}}><ShoppingCart size={24}></ShoppingCart></Link>
        <Link to='/profile'><button className='logbtn'>Login <Password size={24} /></button></Link>
        </div>
    </div>
  )
}

export default Navbar