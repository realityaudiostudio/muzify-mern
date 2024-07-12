import React from 'react';
import Piano from '../../images/pno.png';

function Header() {
  return (
    <div className='mainHead'>
        <div className="dataas">
            <p>CLASSIC PIANO 213</p>
            <p></p>
        </div>
        <div className="pno">
            <img src={Piano} alt='Piano'></img>
        </div>
    </div>
  )
}

export default Header