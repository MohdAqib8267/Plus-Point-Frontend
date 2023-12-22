import React from "react";
import img from '../../images/PlusPointWhite.png' ;
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer(){
    return(
        <>
         <div className="main-main-footer" style={{width:"100vw",background:"#4c341f",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className="main-footer">
               <div className="foot-row-1">
                   <div className="foot-col-1">
                       <img src={img} alt="" className="foot-img"/>
                       <p className="foot-para">
                          Plus Point Locks is here to make your homes a merrier feel. Our hardware collection provides you with the best of options, 
                          at the most affordable prices! Don’t believe us? Have a look for yourself!
                       </p>
                       <div className="social-icons">
                       <div className="si-div"><FacebookOutlinedIcon /></div>
                          <div className="si-div"><TwitterIcon /></div>
                          <div className="si-div"><InstagramIcon/></div>
                          <div className="si-div"><PinterestIcon /></div>
                          <div className="si-div"><YouTubeIcon /></div>
                          <div className="si-div"><LinkedInIcon /></div>
                       </div>
                   </div>
                   <div className="foot-col-2 foot-col target">
                     <h3>Quick Links</h3>
                     <a href="">Home</a>
                     <a href="">Discover</a>
                     <a href="">Our Expertise</a>
                     <a href="">Media</a>
                     <a href="">Products</a>
                     <a href="">Blogs</a>
                     <a href="">Contact us</a>
                   </div>
                   <div className="foot-col-3 foot-col">
                       <h3>Products</h3>
                       <a href="">Mortise Lock Set</a>
                       <a href=""> Aldrop Door Set</a>
                       <a href=""> Pull Handles</a>
                       <a href="">Main Door Lock Set</a>
                       <a href="">Door Locks & Latches</a>
                       <a href="">Door Hinges & Control System</a>
                       <a href=""> Furniture Locks & Accessories</a>
                        <a href=""> Decoratives</a>
                        <a href="">Door Accessories</a>
                   </div>
                   <div className="foot-col-4 foot-col">
                        <div className="foot-services">
                            <h3>Services</h3>
                            <a href="">About us</a>
                            <a href="">Our Team</a>
                            <a href="">Mission Vision</a>
                        </div>
                        <div className="foot-more">
                             <h3>More</h3>
                             <a href="">Terms & Conditions</a>
                             <a href="">Privacy policy</a>
                             <a href="">FAQ’s</a>
                        </div>
                   </div>
               </div>
               <div className="foot-row-2"></div>
               <div className="foot-row-3">
                  ©Plus Point all rights reserved
               </div>
          </div>
          </div>
        </>
    )
}