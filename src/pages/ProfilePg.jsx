import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import sitar from '../images/sitar.png';



function ProfilePg() {
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
        <p>Guys please make the changes here.Don't change Navbar and Footer Contetnts<br>
        </br>
        Just edit this page and complete UI</p>
        </div>


        <div class = "sit" style={{
          width: '259px',
          height: '327px',
          flexShrink: '0',
          borderRadius: '15px',
          marginRight: '60px',
          paddingLeft: '48px',
          paddingRight: '48px',
          paddingTop: '50px',
          
      
        }}>
        <img src={sitar} alt='sitar'></img>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default ProfilePg