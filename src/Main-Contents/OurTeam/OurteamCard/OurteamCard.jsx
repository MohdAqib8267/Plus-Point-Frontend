import React from 'react'
import img from '../../../images/OurTeamBanner.png';
import './OurteamCard.css';
import {motion} from 'framer-motion';
export default function OurteamCard(props) {
  return (
    <>
       <motion.div 
        initial={{ y: "5rem" }}
        whileInView={{ y: 0,  }}
        exit={{ opacity: 0, y: "2rem" }}
        transition={{
          duration: 1,
          type: "ease-in",
        }}
        viewport={{once:true}}
       className="our-team-card">
            <div className='our-team-card-img'><img src={props.img} alt=""/></div>
             
          <div className="our-team-card-Tpost">
            <h3 className="our-team-card-name">
                    {props.name}
            </h3>
            <h5 className="our-team-card-post">
                   {props.post}
            </h5>
          </div>
          <div className="our-team-card-info">
              {props.info}
          </div>
       </motion.div>
    </>
  )
}
