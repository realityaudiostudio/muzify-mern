import React from 'react';
import "./navbar.css";
import Logoo from '../../images/logoo.png';
import { Password } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='mainNav'>
        <div className="links">
            <Link className='routl' to='/products'>Products</Link>
            
            <Link className='routl' to='/about'>About</Link>
            <Link className='routl' to='/contact'>Contact</Link>
        </div>
        <div className="lego">
            <img src={Logoo} alt='logo'></img>
            <p>Muzify</p>
        </div>
        <div className="loging">
          <button className='logbtn'>Login <Password size={24} /></button>
        </div>
    </div>
  )
}

export default Navbar