import React from 'react'
import DarkLog from '../../images/drklogo.png';
import "./footer.css";


function Footer() {
  return (
    <div className='MnFoot'>
        <div className="mnfoot2">
        <div className="sec1">
            <div className="drlog">
                <img src={DarkLog} alt='logo'></img>
                <p className='dlm'>Muzify</p>
            </div>
            <p className='wmf'>Where the musicians find the<br></br> tools they need to create!</p>
            <a href='#index' >www.muzify.vercel.app</a>
        </div>
        <p className='footp'>Adress line 1<br></br>
Adress line 2<br></br>
Pin<br></br>
State</p>
<p className="footp">hello@muzify.in<br></br>1234567890</p>
        </div>
        <p className='footlt'>Designed By ALAN JOSE SANTO<br></br>
        Developed By Alan, Savio,Anoop</p>
    </div>
  )
}

export default Footer