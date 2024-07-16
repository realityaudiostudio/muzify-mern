import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Truck } from '@phosphor-icons/react'
import sitar from '../images/sitar.png';
import { ShoppingCart } from '@phosphor-icons/react';
import { HandCoins } from '@phosphor-icons/react/dist/ssr';
import { Lock } from '@phosphor-icons/react';
import { Crown } from '@phosphor-icons/react';
function ProInd() {
  return (
    <div>
        <Navbar></Navbar>
        <div class='head' style={{
          marginLeft:'60px',
          marginTop:'88px',
          marginBottom:'47px'
        }}>
        <h2>Individual Products</h2>
        </div>
        <div class='top' style={{
           display: 'flex',
         alignItems: 'flex-start',
        marginLeft:'60px',
        marginRight :'60px',
        marginTop:'47px',
        marginBottom:'88px'

        }}>
        <div class='inner' style={{
          display:'block'
        }}>
       <div class='info' style={{
        display: 'flex',
        width: '213px',
        padding: '14px',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '10px',
        background: '#D6F2FF',
        boxShadow: '0px 4px 10.1px 0px' ,
        marginBottom:'53px'
       }}>
        <div class='infoo' style={{
          color: '#0E315D',
          textAlign: 'center',
          fontFamily: 'Kodchasan',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
        }}>Product Information</div>
       </div> 
       
       <div  class='ins' style={{
        color: '#0E315D',
        fontFamily: 'Kodchasan',
        fontSize: '64px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        
        // marginRight:'687px',
        // marginBottom:'201px',
    
       }}>
       Sitar 6 String
       </div>
       <div class='sitinf' style={{
       width: '474px',
       height: '78px',
       flexShrink: '0',
       color: '#0E315D',
       fontFamily: 'Kodchasan',
       fontSize: '20px',
       fontStyle: 'normal',
       fontWeight: '400',
       lineHeight: 'normal',
       marginTop:'11px',
       marginRight:'245px'
       }}>Explore the captivating realm of Musical Instruments through our remarkable assortment.</div>
 <div className="proinddat">
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
       <div class='sit' style={{
       width: '442px',
       height: '391px',
       borderRadius: '34px',
      //  boxShadow: '0px 4px 55.2px 4px', 
      //  marginleft:'405px',
      //  boxShadow: '0px 4px 55.2px 4px rgba(14, 49, 93, 0.23)'
      marginTop:'60px',
      marginRight:'88px'
      
       }}>
       <img src={sitar} alt='sitar'></img>
       </div>
       </div>
{/* <div class='mid' style={{
display: 'inline-flex',
padding: '40px',
justifyContent: 'center',
alignItems: 'center',
gap: '88px',
borderRadius: '8px',
background: '#B5EAFF',
boxShadow: '0px 4px 14.9px 0px rgba(14, 49, 93, 0.26)',
height:'222px',
width:'1068px',
marginLeft:'78px',
marginRight:'106px',
marginTop:'58px'
}}>
  <div class='boxa' style={{
    display: 'flex',
    width: '181px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    marginLeft:'40px',
    marginTop:'53px',
    marginBottom:'53px',
    marginRight:'88px'
  }}>
    <div class='tru' style={{
 width: '35px',
 height: '50px',
 marginLeft:'65.5px',
 marginRight:'65.5px'
    }}>
<Truck size={40}></Truck>
   
    </div>
<div class='insbo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '24px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',
marginBottom:'4px',
// height:'31px',
// width:'181px'
}}>
FREE SHIPPING
</div>

<div class='abo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '400px',
lineHeight: 'normal',
marginTop:'4px',
// width:'181px',
// height:'26px'
}}>
ON THIS ALL ORDER
</div>


  </div>
  <div class='boxb' style={{
    display: 'flex',
    width: '181px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    marginTop:'53px',
    marginBottom:'53px',
    marginRight:'88px',
    marginLeft:'88px'
  }}>
    <div class='truu' style={{
 width: '35px',
 height: '50px',
 marginLeft:'65.5px',
 marginRight:'65.5px'
    }}>
   
   <HandCoins size={40}></HandCoins>
    </div>
<div class='insbo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '24px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',
marginBottom:'4px',
// height:'31px',
// width:'181px'
}}>
PAYMENT
</div>

<div class='abo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '400px',
lineHeight: 'normal',
marginTop:'4px',
// width:'181px',
// height:'26px'
}}>
All Paymet Methods Availale
</div>


  </div>
  <div class='boxa' style={{
    display: 'flex',
    width: '181px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    marginLeft:'88px',
    marginTop:'53px',
    marginBottom:'53px',
    marginRight:'88px'
  }}>
    <div class='tru' style={{
 width: '35px',
 height: '50px',
 marginLeft:'65.5px',
 marginRight:'65.5px'
    }}>
   <Lock size={40}></Lock>
   
    </div>
<div class='insbo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '24px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',
marginBottom:'4px',
// height:'31px',
// width:'181px'
}}>
SAFETY
</div>

<div class='abo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '400px',
lineHeight: 'normal',
marginTop:'4px',
// width:'181px',
// height:'26px'
}}>
Safety Is Our First Priority
</div>


  </div>
  <div class='boxa' style={{
    display: 'flex',
    width: '181px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    marginLeft:'88px',
    marginTop:'53px',
    marginBottom:'53px',
    marginRight:'40px'
  }}>
    <div class='tru' style={{
 width: '35px',
 height: '50px',
 marginLeft:'65.5px',
 marginRight:'65.5px'
    }}>
<Crown size={40}></Crown>
   
    </div>
<div class='insbo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '24px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',
marginBottom:'4px',
// height:'31px',
// width:'181px'
}}>
PREMIUM
</div>

<div class='abo' style={{
alignSelf: 'stretch',
color: '#0E315D',
textAlign: 'center',
fontFamily: 'Kodchasan',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '400px',
lineHeight: 'normal',
marginTop:'4px',
// width:'181px',
// height:'26px'
}}>
Direct And Better Premium
</div>


  </div>




</div> */}
<div className='mid' style={{
  display: 'inline-flex',
  padding: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '88px',
  borderRadius: '8px',
  background: '#B5EAFF',
  boxShadow: '0px 4px 14.9px 0px rgba(14, 49, 93, 0.26)',
  height: '222px',
  width: '1068px',
  marginLeft: '78px',
  marginRight: '106px',
  marginTop: '58px',
  display:'flex'
}}>
  {[
    {
      icon: <Truck size={40} />,
      title: "FREE SHIPPING",
      subtitle: "ON THIS ALL ORDER"
    },
    {
      icon: <HandCoins size={40} />,
      title: "PAYMENT",
      subtitle: "All Payment Methods Available"
    },
    {
      icon: <Lock size={40} />,
      title: "SAFETY",
      subtitle: "Safety Is Our First Priority"
    },
    {
      icon: <Crown size={40} />,
      title: "PREMIUM",
      subtitle: "Direct And Better Premium"
    }
  ].map((item, index) => (
    <div className='box' key={index} style={{
      display: 'flex',
      width: '181px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      margin: '0 40px', // Adjusted margins for consistency
    }}>
      <div className='icon' style={{
        width: '35px',
        height: '50px',
        marginBottom: '8px', // Space between icon and title
      }}>
        {item.icon}
      </div>
      <div className='title' style={{
        color: '#0E315D',
        textAlign: 'center',
        fontFamily: 'Kodchasan',
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: 'normal',
        marginBottom: '4px',
      }}>
        {item.title}
      </div>
      <div className='subtitle' style={{
        color: '#0E315D',
        textAlign: 'center',
        fontFamily: 'Kodchasan',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: 'normal',
      }}>
        {item.subtitle}
      </div>
    </div>
  ))}
</div>

<div class='vinfo' style={{
        display: 'flex',
        width: '153px',
        padding: '14px',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '10px',
        background: '#D6F2FF',
        boxShadow: '0px 4px 10.1px 0px' ,
        marginBottom:'53px',
        marginLeft:'60px',
        marginTop:'50px'
       }}>
        <div class='vinfoo' style={{
          color: '#0E315D',
          textAlign: 'center',
          fontFamily: 'Kodchasan',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
        }}>Product Video</div>
       </div>
       <div className='yout' style={{
  marginTop: '60px',
  marginLeft: '100px',
  marginRight: '100px',
  display: 'flex',
  justifyContent: 'center', // Center horizontally
}}>
  
  <iframe 
    width="700" 
    height="345" 
    src="https://www.youtube.com/embed/RzoO756PvL8?si=xhfI0fheZ-hh-HVo" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen 
    title="YouTube Video"
  ></iframe>
</div>


        <Footer></Footer>
    </div>
  )
}

export default ProInd










