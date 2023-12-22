import React from 'react'
import './Vision.css'
import img from '../../images/vision.png';
import vision1 from '../../images/vision-1.png';
import vision2 from '../../images/vision-2.png';
import Header from '../Header/Header'
import PreFooter from '../PreFooter/PreFooter'
import Footer from '../Footer/Footer'
export default function Vision() {
  return (
    <>
       <div className="main-vision">
            <Header />
            <div className="vision-banner">
                <img src={img} alt="" />
            </div>
            <div className="vision-text-slide">
            {/* Mission  Vission */}
                {/* <div className="vision-marque">
                  <span>Mission, Mission, Mission,</span>
                </div>
                <div className="vision-marque marque-2">
                  <span>Mission, Mission, Mission,</span>
               </div> */}
            </div>
            {/* <div className="vision-text-slide">
                  <div className="vision-marque v-2 ">
                    <span>Vision,  Vision,  Vision, Vision,</span>
                  </div>
                  <div className="vision-marque v-2  marque-v2">
                    <span>Vision,  Vision,  Vision, Vision,</span>
                  </div>
            </div> */}  
            <div className="vision-content">
               <div className="vision-content-1">
                  <div className="vision-content-info">
                    <h3>Our Vision</h3>
                    <p>
                       There can be nothing more precious, valuable and significant for us than to represent our Industry, and our beloved nation on the Globe. 
                       At Plus Point, we have a passion to achieve this vision. We believe in our process, and truly stand by it.
                    </p>
                  </div>
                  <div className="vision-content-img"><img src={vision1} alt="" /></div>
                    
               </div>
               <div className="vision-content-2">
                  <div className="vision-content-info vision-add">
                    <h3>Our Mission</h3>
                    <p>
                     Being in the hardware industry for more than 80 years, we have understood one thing, that is, a customer cannot rely on one single brand for all their hardware needs. 
                     There is no brand that does it all perfectly. We at Plus Point are here to change that. We are committed to a mission to be Your One Stop Hardware Solution. A solution you can trust and rely on.
                    </p>
                  </div>
                  <div className="vision-content-img vision-add2"><img src={vision2} alt="" /></div>      
               </div>
               <div className="vision-content-3">
                 <p>“A spirit with a vision, is a dream with a mission.”</p>
               </div>
            </div>
            <PreFooter />
            <Footer />
       </div>
    </>
  )
}
