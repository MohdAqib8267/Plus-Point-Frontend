import React, { useEffect, useState } from 'react'
import './Vision.css'
import img from '../../images/vision.png';
import vision1 from '../../images/vision-1.png';
import vision2 from '../../images/vision-2.png';
import Header from '../Header/Header'
import PreFooter from '../PreFooter/PreFooter'
import Footer from '../Footer/Footer'
import axios from 'axios';
export default function Vision() {

  const ImgURL="http://localhost:1337"
  const [vision,setVision]=useState(' ');
useEffect(()=>{
   
const baseURL = "http://localhost:1337/api/";

const token = "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152"

   const headers = {
     Authorization: `Bearer ${token}`,
   };

    const fetchVision=async()=>{
      const res = await axios.get(`${baseURL}mission-and-visions?populate=*`,{
        headers:headers,
      });
      console.log(res.data.data);
      setVision(res.data.data[0]?.attributes);
    }
    fetchVision();
  },[])
  return (
    
    <>
       <div className="main-vision">
            <Header />
            <div className="vision-banner">
            <img src={`${ImgURL}${vision?.Image?.data?.attributes?.url}`} alt="" />
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
                    <div dangerouslySetInnerHTML={{ __html: vision.Our_Vision}} />
                    </p>
                  </div>
                  <div className="vision-content-img"><img src={`${ImgURL}${vision?.Vision_Image?.data?.attributes?.url}`} alt="" /></div>
                    
               </div>
               <div className="vision-content-2">
                  <div className="vision-content-info vision-add">
                    <h3>Our Mission</h3>  
                    <p>
                    <div dangerouslySetInnerHTML={{ __html: vision.Our_Mission}} />
                    </p>
                  </div>
                  <div className="vision-content-img vision-add2">
                  <img src={`${ImgURL}${vision?.Mission_Image?.data?.attributes?.url}`} alt="" />
                    </div>      
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
