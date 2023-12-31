import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './Product7.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
import axios from 'axios';
export default function Product7() {

   const [prod, setProd] = useState(" ");
   const [strip, setStrip] = useState([]);
   const [domes, setDomes]=useState([]);
   const [flatdomes, setFlatDomes]=useState([]);
   const [godStatues, setGodStatues]=useState([]);

   const ImgURL = "http://localhost:1337";
   useEffect(()=>{
      const baseURL =
      process.env.REACT_APP_API_URL || "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchProducts = async () => {
      const res = await axios.get(
        `${baseURL}decoratives?populate=*`,
        {
          headers: headers,
        }
      );
      console.log(res.data.data);
      setProd(res.data?.data[0].attributes);
    };
    const fetchBrassStrip = async () => {
      const res = await axios.get(
        `${baseURL}decoratives?populate[brass_strips][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setStrip(res.data?.data[0].attributes?.brass_strips?.data);
    };
    const fetchDomes = async () => {
      const res = await axios.get(
        `${baseURL}decoratives?populate[domes][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setDomes(res.data?.data[0].attributes?.domes?.data);
    };
    const fetchFlatDomes = async () => {
      const res = await axios.get(
        `${baseURL}decoratives?populate[flat_domes][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setFlatDomes(res.data?.data[0].attributes?.flat_domes?.data);
    };
    const fetchGodStatues = async () => {
      const res = await axios.get(
        `${baseURL}decoratives?populate[god_statues][populate]=*`,
        {
          headers: headers,
        }
      );
      console.log(res.data.data);
      setGodStatues(res.data?.data[0].attributes?.god_statues?.data);
    };
    fetchProducts();
    fetchBrassStrip();
    fetchDomes();
    fetchFlatDomes();
    fetchGodStatues();
   },[]);

    const section = [
        {
           img:[1,2,3,4,5,6],
           title:"Brass Strips"
        },
        {
           img:[1,2,3,4,5,6],
           title:"Domes"
        },
        {
           img:[1,2,3,4,5,6],
           title:"Flat Domes"
        },
        {
           img:[1,2,3,4,5,6],
           title:"God statues"
        },
       ];
    const des1="Enhance the security of your storage spaces with our Cupboard Locks. Designed for discretion and efficiency, these locks provide robust protection for your valuables. ";
    const des2="Easy to install and operate, they're the perfect solution for keeping your personal items safe and secure in any home or office setting.";
  return (
    <>
      <Header />
      <div className="main-product7">
            <div className="product7-section1">
                <PBannerCard prod={prod?.Decoratives_Information} src={prod?.Decoratives_Image?.data?.attributes?.url} />
               
                
            </div>


            {/* Brass Strip */}
            <div className="product7-section2">

               <div className="product7-section2-title">Brass Strips</div>
               <div className="product7-section2-img">
                         {Array.isArray(strip) && strip.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"0",justifyContent:"flex-start",gap:"40px"}}>
                                   {/* <img src={img1} alt="" style={{height:"80%"}} /> */}
                                   <img src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`} style={{height:"80%"}} alt="" />
                                   <div className="product6-content3-title">{val?.attributes?.Title}</div>
                                  </div>
                            )
                        })}
               </div>

            </div>
            {/* Domes */}
            <div className="product7-section2">

               <div className="product7-section2-title">Domes</div>
               <div className="product7-section2-img">
                         {Array.isArray(domes) && domes.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"0",justifyContent:"flex-start",gap:"40px"}}>
                                   {/* <img src={img1} alt="" style={{height:"80%"}} /> */}
                                   <img src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`} style={{height:"80%"}} alt="" />
                                   <div className="product6-content3-title">{val?.attributes?.Title}</div>
                                  </div>
                            )
                        })}
               </div>

            </div>
            {/* Flat Domes */}
            <div className="product7-section2">

               <div className="product7-section2-title">Flat Domes</div>
               <div className="product7-section2-img">
                         {Array.isArray(flatdomes) && flatdomes.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"0",justifyContent:"flex-start",gap:"40px"}}>
                                   
                                   <img src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`} style={{height:"80%"}} alt="" />
                                   <div className="product6-content3-title">{val?.attributes?.Title}</div>
                                  </div>
                            )
                        })}
               </div>

            </div>
            {/* God Statues */}
            <div className="product7-section2">

               <div className="product7-section2-title">God Statues</div>
               <div className="product7-section2-img">
                         {Array.isArray(godStatues) && godStatues.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"0",justifyContent:"flex-start",gap:"40px"}}>
                                   
                                   <img src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`} style={{height:"80%"}} alt="" />
                                   <div className="product6-content3-title">{val?.attributes?.Title}</div>
                                  </div>
                            )
                        })}
               </div>

            </div>
            
            {/* section2 */}
            {/* {
               section.map((val,i)=>{
                 return(
                <div className="product7-section2">
                <div className="product7-section2-title">{section[i].title}</div>
                <div className="product7-section2-img">
                {section[i].img.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"0",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                </div>
                </div>
                 )
               })
            } */}


      </div>
      <PreFooter />
      <Footer />
    </>
  )
}