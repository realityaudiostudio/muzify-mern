import React from 'react';
import "./navbar.css";
import Logoo from '../../images/logoo.png';
import { Password } from "@phosphor-icons/react";

function Navbar() {
  return (
    <div className='mainNav'>
        <div className="links">
            <a href='#index'>Products</a>
            <a href='#index'>About</a>
            <a href='#index'>Contact</a>
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