import React from 'react'
import { ShoppingCart } from "@phosphor-icons/react";
import "./mnproducts.css";
import Guits from '../../images/guitar.png';

function MnProducts() {
  return (
    <div className="mnpro">
        <p className='mmt'>And Many More to  :</p>
        <div className="pros">
            <div className="proind">
                <div className="proinddat">
                    <h2>Fender Guitar</h2>
                    <p>Discover Fender guitars' iconic sound and quality.</p>
                    <h3>$49</h3>
                    <button className='bynp'>Buy Now <ShoppingCart size={12} /></button>
                </div>
                <img src={Guits} alt='guitar'></img>
            </div>
            {/* proindu */}
            <div className="proind">
                <div className="proinddat">
                    <h2>Fender Guitar</h2>
                    <p>Discover Fender guitars' iconic sound and quality.</p>
                    <h3>$49</h3>
                    <button className='bynp'>Buy Now <ShoppingCart size={12} /></button>
                </div>
                <img src={Guits} alt='guitar'></img>
            </div>
            {/* proindu */}
            <div className="proind">
                <div className="proinddat">
                    <h2>Fender Guitar</h2>
                    <p>Discover Fender guitars' iconic sound and quality.</p>
                    <h3>$49</h3>
                    <button className='bynp'>Buy Now <ShoppingCart size={12} /></button>
                </div>
                <img src={Guits} alt='guitar'></img>
            </div>
        </div>
    </div>
  )
}

export default MnProducts