import React, { useEffect, useState } from 'react'
import './HomeUSP.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function HomeUSP() {

  const [pos,setPos] = useState(0);
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(()=>{
  //     gsap.set('.homeUSP-left-content',{position:"absolute"});
  //     setPos(1);
  //     gsap.to(".hu",{
  //       yPercent:-100,
  //       stagger:0.5,
  //       position:"absolute",
  //       scrollTrigger:{
  //         trigger:".main-homeUSP",
  //         markers:true,  
  //         start:"top top+=100px",
  //         scrub:1,
  //         end:"bottom bottom-=700px",
  //         pin:true,
  //       },
  //     })

      
  // },[])

  useEffect(()=>{

   if(window.innerWidth>1000){
      const observer = new IntersectionObserver((enteries)=>{
         enteries.forEach((item)=>{
            if(item.isIntersecting)
            setPos(1);
            else
            setPos(0);
         })
      },{
        rootMargin:"-10px",
        threshold:0.9
      })

      const elm = document.querySelector(".main-homeUSP");
      observer.observe(elm);

      return ()=> observer.disconnect();
   }
  },[])

  return (
    <>
      <div className="main-homeUSP xyz">
          <div className="homeUSP-left">   
             <div className="homeUSP-left-content "> 
                 <h1>USP’s</h1>
                 <p>The motive behind the initiation of Plus Point was to give a new perspective to the Indian Hardware Industry. To achieve this, it was essential for us to stand out in terms of our practices and our ideology. 
                    What different do we offer? Let’s understand.
                </p>
             </div>
          </div>
          <div className="homeUSP-right">
             <div className={!pos?"homeUSP-right-content":"homeUSP-right-content usp-animate"} style={ window.innerWidth>1000? pos?{top:"2rem"}:{top:"5rem"}:{position:"relative"}} >
                  <h1>One Stop Hardware Solution:</h1>
                  <p>Explore a universe of hardware possibilities under one roof at Plus Point. </p>
             </div>
             <div className={!pos?"homeUSP-right-content":"homeUSP-right-content usp-animate"} style={ window.innerWidth>1000? pos?{top:"4rem"}:{top:"22rem"}:{position:"relative"}}>
                  <h1>Excellent Value For Money:</h1>
                  <p>Experience the perfect blend of quality and affordability with Plus Point's hardware solutions.</p>
             </div>
             <div className={!pos?"homeUSP-right-content":"homeUSP-right-content usp-animate"} style={ window.innerWidth>1000? pos?{top:"6rem"}:{top:"39rem"}:{position:"relative"}}>
                  <h1>Innovation and Style:</h1>
                  <p>Elevate your spaces with the innovative artistry and stylish designs that define Plus Point's hardware range.</p>
             </div>
          </div>
      </div>
    </>
  )
}