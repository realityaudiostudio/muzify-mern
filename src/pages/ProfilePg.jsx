import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import sitar from '../images/sitar.png';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function ProfilePg() {
  const {user} = useUser();
  const navigate = useNavigate();
  if(!user)
  {
    navigate('/login');
    return null;
  }



  return (
    <div>
        <Navbar></Navbar>
        
        <div class="head" style={{
            borderRadius: '15px',
            marginRight: '60px',
            paddingLeft: '48px',
            paddingRight: '48px',
            paddingTop: '50px',

        }}>
        <h2>Profile Page</h2>
   <h2>{user.username}</h2> <br></br>
        
        <p>EMAIL: {user.email}<br></br>
        </p>
        
        </div>
        <div class = "sit" style={{
          width: '259px',
          height: '380px',
          flexShrink: '0',
          borderRadius: '15px',
          marginRight: '60px',
          paddingLeft: '48px',
          paddingRight: '48px',
          paddingTop: '50px',
          
      
        }}>
          <h2> YOUR ORDERS </h2>
          <br></br>
        <img src={sitar} alt='sitar'></img>
        </div>
        <div class = 'prof' style={{
             
             borderRadius: '15px',
             marginRight: '60px',
             paddingLeft: '48px',
             paddingRight: '48px',
             paddingTop: '50px',


        }} >
        <div className="proinddat">
        <div className="indpd">
                    <div className="indpdpr">
                        <h2>Sitar 6 String</h2>
                        <p>2.5 Review</p>
                        <Link to="/proind"><button className='prbt'>Buy Now <ShoppingCart></ShoppingCart></button></Link>
                    </div>
                    <h3>$49</h3>
                </div>
                </div>

        </div>
        <Footer></Footer>
    </div>
  )
}

export default ProfilePg