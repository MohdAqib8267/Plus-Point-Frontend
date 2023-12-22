import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import homeMainLeft from "../../../images/home-main-left.png";
import homeMainRight from "../../../images/home-main-right.png";
import "./HomeBanner.css";

gsap.registerPlugin(ScrollTrigger);

const HomeBanner = (props) => {
  // const topBannerRef = useRef(null);
  // const bottomBannerRef = useRef(null);
  // const centerBannerRef = useRef(null);
  // const banRef = useRef(null);

  const [scrol,setScrol] = useState(0);
  const height = window.innerHeight;

  useEffect(()=>{
    if(window.pageYOffset < 1500)
    
      props.setNewHead(false);
    else
    // setScrol(900);
    props.setNewHead(true);

  },window.addEventListener('scroll',()=>{
    if(window.pageYOffset < 1500){
      setScrol(window.pageYOffset);
    }
    else{
       setScrol((90*height)/80);
    }
  }))

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: banRef.current,
  //         // markers: true,
  //         start: "0%",
  //         end: "100%",
  //         scrub: 5,
  //         pin: true,
  //         anticipatePin: 1,
  //       },
  //     });
  //     tl.to(".home-toppest-banner", {
  //       rotateY: "-168px",
  //       transformOrigin:"left",
  //       perspective:'500px',
  //       duration: 5,
  //       ease: "circ.in",
  //               yoyo: true,
  //     },0);
  //       tl.to(".home-bottom-banner", {
  //         rotateY: "168px",
  //         transformOrigin:"right",
  //         perspective:'500px',
  //         duration: 5,
  //         ease: "circ.in",
  //               yoyo: true,
  //       },0);
  //       tl.to(".content", {
  //         scaleY: 2,
  //       //   height: "100vh",
  //           opacity:1,
  //           duration:5,
  //           fontSize:"5rem",

  //         onComplete: () => {
  //           // Ensure the pinned area expands to the full height
  //           ScrollTrigger.refresh();
  //         },
  //       },0);
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div id="home-banner-main">
      
        <div className="banner" > {/* ref={banRef} ref={topBannerRef}*/}
        {/* <div className="home-toppest-banner" style={{transform:`rotateY(${scrol/10}deg) perspective(1000px)`}} > */}
        <div className="home-toppest-banner" style={{transform:`rotateY(${(scrol/height)*80}deg) perspective(1000px)`}} >
          <img className="h-b" src={homeMainLeft} alt="" />  
        </div>
        {/* <div id="home-center-banner" ref={centerBannerRef}> */}
        <div id="home-center-banner">
          {/* <div className="content">
            <h1>Plus Point</h1>
          </div> */}
        </div>
        {/* <div className="home-bottom-banner"  ref={bottomBannerRef}> */}
        <div className="home-bottom-banner" style={{transform:`rotateY(${-(scrol/height)*80}deg) perspective(1000px)`}}> {/*  ref={bottomBannerRef}*/}
          <img className="h-b" src={homeMainRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
