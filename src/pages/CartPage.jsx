import React from 'react';
import "./csss/cart.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Situ from '../images/sitar.png';
import { Trash } from '@phosphor-icons/react';


function CartPage() {
  return (
    <div>
        <Navbar></Navbar>
        <h2 className="carthd">Cart</h2>
        <div className="cartall"></div>
        <div className="cartpd">
            {/* cartind */}
            <div className="cartind">
                <img src={Situ} alt='Sitar Image'></img>
                <div className="cartitdt">
                    <h3>Sitar 6 String</h3>
                    <p>String Instrument</p>
                    <button><Trash size={20} /> Remove</button>
                </div>
                <h2>$49</h2>
            </div>
            {/* cartind */}
            {/* cartind */}
            <div className="cartind">
                <img src={Situ} alt='Sitar Image'></img>
                <div className="cartitdt">
                    <h3>Sitar 6 String</h3>
                    <p>String Instrument</p>
                    <button><Trash size={20} /> Remove</button>
                </div>
                <h2>$49</h2>
            </div>
            {/* cartind */}
            {/* cartind */}
            <div className="cartind">
                <img src={Situ} alt='Sitar Image'></img>
                <div className="cartitdt">
                    <h3>Sitar 6 String</h3>
                    <p>String Instrument</p>
                    <button><Trash size={20} /> Remove</button>
                </div>
                <h2>$49</h2>
            </div>
            {/* cartind */}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default CartPage