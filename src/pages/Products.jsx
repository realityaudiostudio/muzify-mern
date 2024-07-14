import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Guits from '../images/guits.png';
import Situ from '../images/sitar.png';
import "./csss/products.css";
import { ShoppingCart } from '@phosphor-icons/react';
import Footer from '../components/Footer/Footer';

function Products() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="bann">
            <div className="bandat">
                <h2>It’s Your area !</h2>
                <p>Discover the enchanting world of<br></br> Musical Instruments with our exquisite<br></br> collection.</p>
            </div>
            <img src={Guits} alt='guitars'></img>
        </div>
        <div className="allp">
            <div className="indp">
                <img src={Situ} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button>
                    </div>
                    <h3>$49</h3>
                </div>
            </div>
            <div className="indp">
                <img src={Situ} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button>
                    </div>
                    <h3>$49</h3>
                </div>
            </div>
            <div className="indp">
                <img src={Situ} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button>
                    </div>
                    <h3>$49</h3>
                </div>
            </div>
            

            <div className="indp">
                <img src={Situ} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button>
                    </div>
                    <h3>$49</h3>
                </div>
            </div>
            <div className="indp">
                <img src={Situ} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button>
                    </div>
                    <h3>$49</h3>
                </div>
            </div>
            <div className="indp">
                <img src={Situ} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button>
                    </div>
                    <h3>$49</h3>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Products;