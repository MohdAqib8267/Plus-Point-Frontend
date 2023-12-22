import React from "react";
import './OurTeam.css';
import Header from '../Header/Header'
import img from '../../images/OurTeamBanner.png'
import img2 from '../../images/OurTeamPreFoot.png'
import data from './ourTeamdata.js';
import OurteamCard from './OurteamCard/OurteamCard';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';
export default function Ourteam(){

    return(
        <>
           <Header />  
           <div className="our-team-main">
               <div className="our-team-banner">
                    <img src={img} alt="" className="our-team-banner-img"/>
                    <div className="our-team-banner-grade"></div>
                         <motion.p 
                          initial={{ x: "8rem" }}
                          whileInView={{ x: 0,  }}
                          exit={{ opacity: 0, x: "2rem" }}
                          transition={{
                            duration: 2,
                            type: "spring",
                          }}
                          viewport={{once:true}}
                         className="our-team-banner-title">As they say,<span style={{fontWeight:'bold'}}>Teamwork makes the dream work.</span></motion.p>
               </div>
               <div className="our-team-content">
                   <motion.div 
                    initial={{ y: "5rem" }}
                    whileInView={{ y: 0,  }}
                    exit={{ opacity: 0, y: "2rem" }}
                    transition={{
                      duration: 1,
                      type: "spring",
                    }}
                    viewport={{once:true}}
                   className="our-team-content-1">
                        <h5>MEET OUR TEAM</h5>
                        <h3>The leaders who <br />
                            Inspire greatness…</h3>
                   </motion.div>
                   <div className="our-team-content-2">
                        {data.map((val)=>{
                            return(
                                <OurteamCard img={val.img} name={val.name} post={val.post} info={val.desc} />
                            )
                        })}
                   </div>
               </div>
               <div className="our-team-content-3">
                       <img src={img2} alt="" className="out-team-content-3-img"/>
                       <motion.p 
                        initial={{ x: "-10rem" }}
                        whileInView={{ x: 0,  }}
                        exit={{ opacity: 0, y: "2rem" }}
                        transition={{
                          duration: 1,
                          type: "spring",
                        }}
                        viewport={{once:true}}
                       className="our-team-content-3-para">
                         “Alone we can do so little, <br />
                          <span
                          
                          style={{color:"#4C341F"}}>Together we can do so much.”</span> <br />
                          We’re working towards <br />
                          greatness, in unison.
                       </motion.p>
                   </div>
                   
           </div>
           <PreFooter />
                   <Footer />
        </>
    )
}