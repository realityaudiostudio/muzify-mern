import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

//import images
import Drumy from '../../images/drums.png';
import Drumy2 from '../../images/drumkit.png';
import Drumy3 from '../../images/drum-kit.png';

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Drumy} alt='drums' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drumy2} alt='drums' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drumy3} alt='drums' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drumy} alt='drums' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drumy2} alt='drums' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drumy3} alt='drums' />
        </SwiperSlide>
    
      </Swiper>
    </>
  );
}
