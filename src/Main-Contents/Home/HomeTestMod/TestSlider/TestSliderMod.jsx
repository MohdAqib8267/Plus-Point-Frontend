import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestSliderMod.css';

import img from "../../../../images/homeTestMod.png";
import pauseBtn from '../../../../images/pauseBtn.svg';
export default function TestSliderMod(){

    const [imgIndx,setImgIndx] = useState(0);
    const [slidePerView,setSlidePerView] = useState(3);
    const testData = [
        {
            name:"Mr malikni shetu nira",
            place:"Noida"
        },
        {
            name:"Mr Lama Dev",
            place:"Berlin"
        },
        {
            name:"Mrs XYZ",
            place:"Lucknow"
        },
        {
            name:"Mrs Nira ",
            place:"Kolkata"
        },
    ]


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: window.innerWidth<=700?1:3,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        beforeChange:(current,next)=>setImgIndx(next),
      };

    return(
        <>
           <Slider {...settings} >
            {
                testData.map((val,i)=>{
                    return(
                        <div className={i===imgIndx?"testSlider-content activeSlide":"testSlider-content"}>
                            <div className="testSlider-bgimg">
                            {/* <img className='testSlider-img' src={img} alt="" /> */}
                            <iframe className='testSlider-img' src="https://www.youtube.com/embed/PPLrjjtplCk?si=hyPFIjdpjZuBi9AW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className='testSlider-gradient'></div>
                            <img className='pauseBtn' src={pauseBtn} alt="" />
                            <div className="testSlider-name">Mr malikni shetu nira</div>
                            <div className="testSlider-place">Noida</div>
                           </div>
                          <p>Hear from our satisfied customers: Discover their stories, experiences, and heartfelt testimonials. </p>
                        </div>
                    )
                })
            }
           </Slider>
        </>
    )
}