import React from "react";
import './PreFooter.css';
import {motion} from 'framer-motion'
export default function PreFooter(){
    return(
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
           className="main-prefooter">
             <div className="main-prefoot-content">
                 <div className="pre-left">
                       <h3 className="pre-left-title">
                       Know more about us and our products!
                       </h3>
                       <p className="pre-left-para">
                       Fill out your contact details by tapping the ‘Contact Us’ button to dive deeper into the world of Plus Point!
                       </p>
                 </div>
                 <div className="pre-right">
                       <button className="pre-contact">Contact us</button>
                 </div>
             </div>
           </motion.div>
        </>
    )
}