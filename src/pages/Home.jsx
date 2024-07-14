import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MnProducts from '../components/MnProducts/MnProducts';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  return (
    <div>
        <Navbar></Navbar>
      <Header></Header>
      <MnProducts></MnProducts>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  )
}

export default Home