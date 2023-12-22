import React from 'react'
import './HomeMedia.css'
import homeMedia1 from '../../../images/homeMedia-1.png'
import homeMedia2 from '../../../images/homeMedia-2.png'
import homeMedia3 from '../../../images/homeMedia-3.png'
import homeMedia4 from '../../../images/homeMedia-4.png'
import homeMedia5 from '../../../images/homeMedia-5.png'
import {motion} from 'framer-motion'
export default function HomeMedia() {

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <>
        <div className="main-homeMedia xyz">
             <motion.h1
             
             initial={{ y: "5rem" }}
             whileInView={{ y: 0,  }}
             exit={{ opacity: 0, y: "2rem" }}
             transition={{
               duration: 1,
               type: "ease-in",
             }}
             viewport={{once:true}}
             >We set a benchmark</motion.h1>
             <motion.p  
              initial={{ y: "5rem" }}
              whileInView={{ y: 0,  }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 1,
                type: "ease-in",
              }}
              viewport={{once:true}}
             >Here, we lay the foundation of something special. The precision & quality of our diversified range 
                of products is down to our brilliant manufacturing Partners.</motion.p>
             <motion.div
              initial={{ y: "5rem" }}
              whileInView={{ y: 0,  }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 1,
                type: "ease-in",
              }}
              viewport={{once:true}}
             
             className="homeMedia-btn">See More</motion.div>
             <div className="homeMedia-content">
                 <motion.img
                 initial={{x:"-10rem",opacity:'0'}}
                 whileInView={{x:"0",opacity:'1'}}
                 transition={{
                   transition               
                   }} 
                 src={homeMedia1} alt="" className="homeMedia-1"/>
                 <motion.img
                 initial={{x:"-10rem",opacity:'0'}}
                 whileInView={{x:"0",opacity:'1'}}
                 transition={{
                   duration:1
                 }}  src={homeMedia2} alt="" className="homeMedia-2"/>
                 <motion.img
                 initial={{x:"10rem",opacity:'0'}}
                 whileInView={{x:"0",opacity:'1'}}
                 transition={{
                   transition                
                   }}  src={homeMedia3} alt="" className="homeMedia-3"/>
                 <motion.img
                 initial={{x:"10rem",opacity:'0'}}
                 whileInView={{x:"0",opacity:'1'}}
                 transition={{
                   transition                
                   }}  src={homeMedia4} alt="" className="homeMedia-4"/>
                 <motion.img
                  src={homeMedia5} alt="" className="homeMedia-5"/>
             </div>
       </div>
    </>
  )
}
