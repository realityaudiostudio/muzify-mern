import React from 'react';
import "./csss/cart.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Situ from '../images/sitar.png';
import { ShoppingCart, Trash } from '@phosphor-icons/react';


function WishList() {
  return (
    <div>
        <Navbar></Navbar>
        <h2 className="carthd">Wish List</h2>
        <div className="cartall">
        <div className="cartpd">
            {/* cartind */}
            <div className="cartind">
                <img src={Situ} alt='Sitar Image'></img>
                <div className="cartitdt">
                    <h3>Sitar 6 String</h3>
                    <p>String Instrument</p>
                    <button><ShoppingCart size={20} /> Add to cart</button> <button><Trash size={20} /> Remove</button>
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
                    <button><ShoppingCart size={20} /> Add to cart</button> <button><Trash size={20} /> Remove</button>
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
                    <button><ShoppingCart size={20} /> Add to cart</button> <button><Trash size={20} /> Remove</button>
                </div>
                <h2>$49</h2>
            </div>
            {/* cartind */}
        </div>
        {/* ordersummarry 
        <div className="cartsumm">
            <h2>Order Summary</h2>
            <p>Total Amount : $327</p>
            <p>Delivery Fee : $0</p>
            <h3>Grant Total : $327</h3>
            <button className="cko">Checkout</button>
        </div> */}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default WishList