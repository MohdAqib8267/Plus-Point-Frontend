import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './Product8.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
import axios from 'axios';

export default function Product8() {

    const img=[1,2,3,4];
    const img2=[1,2,3,4,5,6,7,8];

    const section = [
        {
            img:[1,2,3],
            title:"Cupboard Pulls"
        },
        {
            img:[1,2,3],
            title:"Cupboard Knocks"
        },
    ]
    const [prod, setProd] = useState(" ");
    const [cupboardCat,setCupboardCat] = useState([]);
    const [drawer,setDrawer] = useState([]);
    const [cupboardPulls,setCupboardPulls] = useState([]);
    const [cupboardKnobs,setCupboardKnobs] = useState([]);

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
        `${baseURL}furniture-locks?populate=*`,
        {
          headers: headers,
        }
      );
      console.log(res.data.data);
      setProd(res.data?.data[0].attributes);
    };
    const fetchCupboardCategory = async () => {
    
      const res = await axios.get(
        `${baseURL}furniture-locks?populate[cupboard_categories][populate]=*`,
        {
          headers: headers,
        }
      );
    //   console.log(res.data.data);
    
      setCupboardCat(res.data?.data[0].attributes?.cupboard_categories?.data);
    };
    const fetchDrawer = async () => {
    
      const res = await axios.get(
        `${baseURL}furniture-locks?populate[drawer_categories][populate]=*`,
        {
          headers: headers,
        }
      );
    //   console.log(res.data.data);
    
      setDrawer(res.data?.data[0].attributes?.drawer_categories?.data);
    };
    const fetchCupboardPulls = async () => {
    
      const res = await axios.get(
        `${baseURL}furniture-locks?populate[cupboard_pulls][populate]=*`,
        {
          headers: headers,
        }
      );
    //   console.log(res.data.data);
    
      setCupboardPulls(res.data?.data[0].attributes?.cupboard_pulls?.data);
    };
    const fetchCupboardKnobs = async () => {
    
      const res = await axios.get(
        `${baseURL}furniture-locks?populate[cupboard_knobs][populate]=*`,
        {
          headers: headers,
        }
      );
    //   console.log(res.data.data);
    
    setCupboardKnobs(res.data?.data[0].attributes?.cupboard_knobs?.data);
    };
    fetchProducts();
    fetchCupboardCategory();
    fetchDrawer();
    fetchCupboardPulls();
    fetchCupboardKnobs();
    },[])

  return (
    <>
       <Header />
       <div className="main-product8">
                <div className="product8-topbanner">
                   <div className="product8-title">{prod?.Title}</div>
                </div>
                <div className="product8-banner">
                   <PBannerCard prod={prod?.Cupboard_Locks_Information} src={prod?.Cupboard_Locks_Image?.data?.attributes?.url} />
                </div>

                {/* section1 */}
                <div className="product8-section1">
                     {cupboardCat?.map((val)=>{
                        return(
                            <div className="product8-section1-wrapper">
                                <img
                                    src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                                    alt=""
                                    />
                                <div className="product8-section1-title" style={{color:'white'}}>{val?.attributes?.Title}</div>
                            </div>
                        )
                     })}
                </div>
                
                {/* section added */}
                <div className="product8-section-added">
                <div className="product8-section-added-wrapper">
                    <div className="product8-section-added-title">
                    {prod?.Sliding_Cupboard_Locks_Title}
                    </div>
                    <div className="product8-section-added-w">
                    <div className="product8-section-added-left">
                    <img src={`${ImgURL}${prod?.Sliding_Cupboard_Locks_Main_Image?.data?.attributes?.url}`}
                                    alt=""
                                    />
                        <div className="product8-section-added-left-info">{prod?.Sliding_Cupboard_Locks_Main_Image_Title}</div>
                    </div>
                    <div className="product8-section-added-right">
                        <div className="product8-section1-wrapper">
                        <img src={`${ImgURL}${prod?.Sliding_Cupboard_Locks_Side_Image?.data?.attributes?.url}`}
                                    alt=""
                                    />
                        <div className="product8-section1-title" style={{color:'white'}}>{prod?.Sliding_Cupboard_Locks_Side_Image_Title}</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* section2 */}
                <div className="product8-section2">
                    <div className="product8-banner">
                      <PBannerCard prod={prod?.Drawer_Infromation} src={prod?.Drawer_Image?.data?.attributes?.url}  />
                    </div>

                    <div className="product8-section1">
                     {drawer.map((val)=>{
                        return(
                            <div className="product8-section1-wrapper">
                               <img
                                    src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                                    alt=""
                                    />
                                    <div className="product8-section1-title" style={{color:'white'}}>{val?.attributes?.Title}</div>
                            </div>
                        )
                     })}
                </div>
                </div>


                <div className="product8-section3">
                        <div className="product7-section2">
                            <div className="product7-section2-title">Cupboard Pulls</div>
                            <div className="product7-section2-img">
                            {cupboardPulls?.map((val)=>{
                                        return(
                                            <div className="product6-content2-img " style={{background:"#ECECEC",justifyContent:"flex-start",gap:"40px"}}>
                                               
                                               <img style={{height:"80%"}}
                                    src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                                    alt=""
                                    />
                                               
                                               <div className="product6-content3-title" >{val?.attributes?.Title}</div>
                                              </div>
                                        )
                                    })}
                            </div>
                           </div>

                </div>
                <div className="product8-section3">
                        <div className="product7-section2">
                            <div className="product7-section2-title">Cupboard Knoks</div>
                            <div className="product7-section2-img">
                            {cupboardKnobs?.map((val)=>{
                                        return(
                                            <div className="product6-content2-img " style={{background:"#ECECEC",justifyContent:"flex-start",gap:"40px"}}>
                                               
                                               <img style={{height:"80%"}}
                                    src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                                    alt=""
                                    />
                                               
                                               <div className="product6-content3-title" >{val?.attributes?.Title}</div>
                                              </div>
                                        )
                                    })}
                            </div>
                           </div>

                </div>

                {/* section3 */}
            {/* <div className="product8-section3">
                {
                    section.map((val,i)=>{
                        return(
                            <div className="product7-section2">
                            <div className="product7-section2-title">{section[i].title}</div>
                            <div className="product7-section2-img">
                            {section[i].img.map((val)=>{
                                        return(
                                            <div className="product6-content2-img " style={{background:"#ECECEC",justifyContent:"flex-start",gap:"40px"}}>
                                               <img src={img1} alt="" style={{height:"80%"}} />
                                               <div className="product6-content3-title">Door Locks & Latches</div>
                                              </div>
                                        )
                                    })}
                            </div>
                           </div>
                        )
                    })
                }

            </div> */}

       </div>
       <PreFooter />
       <Footer />
    </>
  )
}