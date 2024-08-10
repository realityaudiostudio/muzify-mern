import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Guits from '../images/guits.png';
import "./csss/products.css";
import { ShoppingCart } from '@phosphor-icons/react';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useProduct } from '../context/ProductContext';


function Products() {

    const [products,setProducts] = useState([]);
    const {proind} = useProduct();
    
    
    useEffect(()=>{
        const fetchPro = async() =>
        {
            const response = await axios.get('http://localhost:4550/products');
            setProducts(response.data);
        };
        fetchPro();
    },[]);
    
    async function handleProduct(product) {
        proind(product.pname, product.preview, product.pprice, product.pdesc, product.pvid, product.pimg,product.pcategory);
    }    

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
            {products.map((product)=>(
                <div className="indp">
                <img src={product.pimg} alt='sitar'></img>
                <div className="indpd">
                    <div className="indpdpr">
                        <h2>{product.pname}</h2>
                        <p>{product.preview}</p>
                        <Link to="/proind"><button onClick={() => handleProduct(product)} className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button></Link>
                    </div>
                    <h3>{product.pprice}</h3>
                </div>
            </div>
            ))}
            
            {/* <div className="indp">
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
            </div> */}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Products;