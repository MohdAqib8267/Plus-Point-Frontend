import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion';
import Header from '../Header/Header';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';
import HomeCard from './HomeCard/HomeCard';
import HomeAccordian from './HomeAccordian/HomeAccordian';
import HomePhAccord from './HomePhAccord/HomePhAccord';
import HomeUSP from './HomeUSP/HomeUSP';
import HomeMedia from './HomeMedia/HomeMedia';

import HomeTestMod from './HomeTestMod/HomeTestMod';
import HomeNews from './HomeNews/HomeNews';
import './Home.css';
import trust from '../../images/home-1.png'
import progression from '../../images/progression.png'
import quality from '../../images/quality.png'
import HomeBanner from './HomeBanner/HomeBanner';
import homeMain from '../../images/home-main.png';
export default function Home() {

  const [newHead,setNewHead] = useState(true);
  const ref = useRef(null);
  return (
    <>
        <Header newHead={newHead} height={ref.current?ref.current.clientHeight+(window.innerHeight/2):2000} />
         <div className="main-home">
            
            <div className="home-top-banner">
                    <img src={homeMain} alt="" />
            </div>
            <HomeBanner setNewHead={setNewHead}/>
            <div ref={ref} className="home-banner">
                 <motion.h1
                 initial={{y:"15rem",opacity:"0"}}
                 whileInView={{y:"0",opacity:"1"}}
                  transition={{
                    duration:1,
                  }}
                  >WELCOME TO PLUS POINT <br />
                 <span>#YourOneStopHardwareSolution.</span> </motion.h1>

                 <motion.h2
                  initial={{y:"15rem",opacity:"0"}}
                  whileInView={{y:"0",opacity:"1"}}
                  transition={{
                    duration:1,
                  }}
                 >Carrying forward a legacy of more than 80 years, 
                    we have inherited the art, quality & sheer craftsmanship of hardware creation.</motion.h2>

                 <motion.h3
                 initial={{y:"15rem",opacity:"0"}}
                 whileInView={{y:"0",opacity:"1"}}
                  transition={{
                    duration:1,
                  }}
                 >We mix our special touch with new ideas to get the best of old and new.</motion.h3>

                 <motion.h4
                   initial={{y:"15rem",opacity:"0"}}
                   whileInView={{y:"0",opacity:"1"}}
                  transition={{ 
                    duration:1,
                  }}
                 >This journey of revolutionising hardware began from Aligarh, 
                    and now we envision to represent India on the globe.</motion.h4>
            </div>
            <div className="home-content">
                    <div className="home-content-1">
                    <div className="home-content-1-wp xyz">
                            <h1>Values that define us</h1>
                         <motion.div
                          initial={{ y: "5rem" }}
                          whileInView={{ y: 0,  }}
                          exit={{ opacity: 0, y: "2rem" }}
                          transition={{
                            duration: 1,
                            type: "ease-in",
                          }}
                          viewport={{once:true}}
                         className="home-content-1-wrapper">
                             <HomeCard img={trust} title={"Trust:"} info={"Trust is priceless. Our efforts and precision behind each of our products makes you stay rest assured and at peace."} id={1} />
                             <HomeCard img={progression} title={"Progression:"} info={"We have a constant hunger of always being better at what we do, to always strive for more."} id={2}/>
                             <HomeCard img={quality} title={"Quality:"} info={"Products that showcase immense durability, exceptional reliability, are our hallmark."} id={3}/>
                         </motion.div>
                        </div>  
                    </div>
                    <div className="home-content-2">
                        <HomeAccordian />
                        <HomePhAccord />
                    </div>
                    <div className="home-content-3">
                           <HomeUSP />
                    </div>
                    <div className="home-content-4">
                        <HomeMedia />
                    </div>
                    <motion.div 
                     initial={{ y: "5rem" }}
                     whileInView={{ y: 0,  }}
                     exit={{ opacity: 0, y: "2rem" }}
                     transition={{
                       duration: 1,
                       type: "ease-in",
                     }}
                     viewport={{once:true}}
                    className="home-content-5">
                        <HomeNews />
                    </motion.div>
                    <motion.div 
                     initial={{ y: "5rem" }}
                     whileInView={{ y: 0,  }}
                     exit={{ opacity: 0, y: "2rem" }}
                     transition={{
                       duration: 1,
                       type: "ease-in",
                     }}
                     viewport={{once:true}}
                    className="home-content-6">
                         <HomeTestMod />
                    </motion.div>
            </div>
         
         </div>
         <PreFooter />
          <Footer />
    </>
  )
}
