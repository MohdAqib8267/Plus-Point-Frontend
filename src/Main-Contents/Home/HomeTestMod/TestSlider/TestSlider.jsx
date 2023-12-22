import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../../../../images/homeTestMod.png";
import pauseBtn from '../../../../images/pauseBtn.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './TestSlider.css';

// import required modules
import {Autoplay,Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

export default function TestSlider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: false,
          stretch: 0,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="testSlider-content">
               <div className="testSlider-bgimg">
                   <img className='testSlider-img' src={img} alt="" />
                   <div className='testSlider-gradient'></div>
                   <img className='pauseBtn' src={pauseBtn} alt="" />
                   <div className="testSlider-name">Mr malikni shetu nira</div>
                   <div className="testSlider-place">Noida</div>
               </div>
                <p>Hear from our satisfied customers: Discover their stories, experiences, and heartfelt testimonials. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testSlider-content">
               <div className="testSlider-bgimg">
                   <img className='testSlider-img' src={img} alt="" />
                   <div className='testSlider-gradient'></div>
                   <img className='pauseBtn' src={pauseBtn} alt="" />
                   <div className="testSlider-name">Mr malikni shetu nira</div>
                   <div className="testSlider-place">Noida</div>
               </div>
                <p>Hear from our satisfied customers: Discover their stories, experiences, and heartfelt testimonials. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testSlider-content">
               <div className="testSlider-bgimg">
                   <img className='testSlider-img' src={img} alt="" />
                   <div className='testSlider-gradient'></div>
                   <img className='pauseBtn' src={pauseBtn} alt="" />
                   <div className="testSlider-name">Mr malikni shetu nira</div>
                   <div className="testSlider-place">Noida</div>
               </div>
                <p>Hear from our satisfied customers: Discover their stories, experiences, and heartfelt testimonials. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testSlider-content">
               <div className="testSlider-bgimg">
                   <img className='testSlider-img' src={img} alt="" />
                   <div className='testSlider-gradient'></div>
                   <img className='pauseBtn' src={pauseBtn} alt="" />
                   <div className="testSlider-name">Mr malikni shetu nira</div>
                   <div className="testSlider-place">Noida</div>
               </div>
                <p>Hear from our satisfied customers: Discover their stories, experiences, and heartfelt testimonials. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testSlider-content">
               <div className="testSlider-bgimg">
                   <img className='testSlider-img' src={img} alt="" />
                   <div className='testSlider-gradient'></div>
                   <img className='pauseBtn' src={pauseBtn} alt="" />
                   <div className="testSlider-name">Mr malikni shetu nira</div>
                   <div className="testSlider-place">Noida</div>
               </div>
                <p>Hear from our satisfied customers: Discover their stories, experiences, and heartfelt testimonials. </p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}