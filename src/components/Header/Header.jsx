import React from 'react';
import "./header.css";
import Piano from '../../images/pno.png';
import { ShoppingCart,DotsThree } from "@phosphor-icons/react";


function Header() {
  return (
    <div className='mainHead'>
        <div className="dataas">
            <p className='lth'>CLASSIC PIANO 213</p>
            <p className='bigh'>Meet the pure<br></br>PIANO Sound !</p>
            <p className='lth'>Discover the enchanting world of<br></br>pianos with our exquisite collection.</p>
            <div className="bybtn">
                <button className='byn'>Buy Now <ShoppingCart size={24} /></button>
                <button className='sem'>See More <DotsThree size={24} /></button>
            </div>
        </div>
        <div className="pno">
            <img src={Piano} alt='Piano'></img>
        </div>
    </div>
  )
}

export default Header