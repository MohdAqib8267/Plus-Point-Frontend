import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './Product4.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
import pimg from '../../../images/prod-4.png'
import axios from 'axios';
export default function Product4() {

  const [prod,setProd]=useState(' ');
  const [prodRev,setProdRev]=useState(' ');
  const [prodDesign1,setProdDesign1]=useState(' ');
  const [prodDesign2,setProdDesign2]=useState(' ');
  const [prodQueenDesign1,setProdQueenDesign1]=useState(' ');

  const img=["32%","32%","32%"];

  const des1="Merging robust security with striking design, each lock set offers a seamless blend of form and function. Tailored for homeowners who seek the utmost in safety without compromising on elegance, our door pull lock sets serve as the cornerstone of a welcoming yet fortified home. Delve into our collection where each piece promises to deliver unrivaled durability & convenience.";
  const des2="Embrace regal elegance with our Queen lock sets, designed to bestow a touch of majesty to your doorways. These lock sets are crafted with precision, offering not only unwavering security but also a luxurious charm befitting of its name";
  const des3="Discover the seamless integration of style and security with our Door Pull with Main Door Lock. This compact set is the perfect combination for a sleek, secure entryway.";
  const des4="Revolutionize your doorway's security with our robust Mortise Lock Sets, crafted to offer unmatched durability and a sleek finish. These lock sets are not just about safety; they're a statement of style that stands the test of time.";

  const ImgURL = "http://localhost:1337";
  useEffect(()=>{
    const baseURL = process.env.REACT_APP_API_URL|| "http://localhost:1337/api/";
    const token = "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152"
   
     const headers = {
       Authorization: `Bearer ${token}`,
     };
     const fetchProducts=async()=>{
      const res = await axios.get(`${baseURL}main-door-lock-sets?populate=*`,{
          headers:headers,
      });
    // console.log(res.data.data);
    setProd(res.data?.data[0].attributes);
    setProdRev(res.data?.data[0].attributes);
   
    }
     const fetchDoorPullLockSetsDesign=async()=>{
      const res = await axios.get(`${baseURL}main-door-lock-sets?populate[main_door_lock_set_designs][populate]=*`,{
          headers:headers,
      });
    // console.log(res.data.data);
    setProdDesign1(res.data?.data[0].attributes?.main_door_lock_set_designs?.data);
   
    }
     const fetchProdDesign=async()=>{
      const res = await axios.get(`${baseURL}main-door-lock-sets?populate[queen_lock_set_designs][populate]=*`,{
          headers:headers,
      });
    // console.log(res.data.data);
    setProdDesign2(res.data?.data[0].attributes?.queen_lock_set_designs?.data);
   
    }
    fetchProducts();
    fetchDoorPullLockSetsDesign();
    fetchProdDesign();

  },[]);

  const section = [
   {
      img:[1,2,3],
      title:"Door Pull Lock Sets",
      des:des1
   },
   {
      img:[1,2,3],
      title:"Queen Lock Sets",
      des:des2
   },
  ];
//   const htmlContent = prod4?.Title;

// // Render the HTML content using dangerouslySetInnerHTML
// <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

// // Log the HTML content for verification
// console.log(htmlContent);
// const tempDiv = document.createElement('div');
// tempDiv.innerHTML = htmlContent;

// // Find the text content within the div
// const extractedText = tempDiv.textContent || tempDiv.innerText || '';

// console.log(extractedText.trim());
  return (
    <>
      <Header />
      <div className="main-product4">
          <div className="product4-topbanner">
                 <div className="product4-title">{prod?.Title}</div>
          </div>

          
          <div className="product4-section2" style={{background:"white"}}>
                  <div className="product4-section2-wrapper">
                    <PBannerCard prod={prod?.Door_Pull_Lock_Sets_Information} src={prod?.Door_Pull_Lock_Sets_Image?.data?.attributes?.url} />
                    <div className="product4-section1-title" style={{marginBottom:"-2rem"}}>Designs</div>
                    <div className="product4-section1-wrapper">
                        {
                            Array.isArray(prodDesign1) && prodDesign1?.map((item,i)=>{
                              return(
                                <div className="product4-section1-img">
                          <img src={`${ImgURL}${item?.attributes.Image?.data?.attributes?.url}`}  alt=""/>
                          <div className="product4-section1-img-title"><div dangerouslySetInnerHTML={{ __html: item?.attributes?.Title }} /></div>
                          <div className="product4-colors">
                              <div className="product4-color" style={{background:item?.attributes?.Color1}}></div>
                              <div className="product4-color" style={{background:item?.attributes?.Color2}}></div>
                              <div className="product4-color" style={{background:item?.attributes?.Color3}}></div>
                              <div className="product4-color" style={{background:item?.attributes?.Color4}}></div>
                          </div>
                     </div>
                              )
                              
                            })
                          }
                 </div>
                </div>
             </div>

          <div className="product4-section2">
                  <div className="product4-section2-wrapper">
                    <PBannerCard state={"true"} src={prod?.Queen_Lock_set_Image?.data?.attributes?.url}
                    // prodImg={prodRev.Queen_Lock_set_Image}
                     prod={prod?.Queen_Lock_set_Information} />
                    <div className="product4-section1-title" style={{marginBottom:"-2rem"}}>Designs</div>
                    <div className="product4-section1-wrapper">
                        {
                            Array.isArray(prodDesign2) && prodDesign2?.map((item,i)=>{
                              return(
                                <div className="product4-section1-img">
                          <img src={`${ImgURL}${item?.attributes.Image?.data?.attributes?.url}`}  alt=""/>
                          <div className="product4-section1-img-title"><div dangerouslySetInnerHTML={{ __html: item?.attributes?.Title }} /></div>
                          <div className="product4-colors">
                              <div className="product4-color" style={{background:item?.attributes?.Color1}}></div>
                              <div className="product4-color" style={{background:item?.attributes?.Color2}}></div>
                              <div className="product4-color" style={{background:item?.attributes?.Color3}}></div>
                              <div className="product4-color" style={{background:item?.attributes?.Color4}}></div>
                          </div>
                     </div>
                              )
                              
                            })
                          }
                 </div>
                </div>
             </div>

          {/* sections */}
          {/* {
            section.map((val,i)=>{
               return(
                <div className="product4-section2" style={i%2==0?{background:"white"}:{}}>
                  <div className="product4-section2-wrapper">
                    <PBannerCard state={i%2===0?undefined:"true"} title={section[i].title} des1={section[i].des}/>
                    <div className="product4-section1-title" style={{marginBottom:"-2rem"}}>Designs</div>
                    <div className="product4-section1-wrapper">
                      {img.map((val)=>{
                    return(
                     <div className="product4-section1-img">
                          <img src={img1} alt="" />
                          <div className="product4-section1-img-title">Lorem ipsum dolor sit</div>
                          <div className="product4-colors">
                              <div className="product4-color" style={{background:"#F9A964"}}></div>
                              <div className="product4-color" style={{background:"#B76E2E"}}></div>
                              <div className="product4-color" style={{background:"#000"}}></div>
                              <div className="product4-color" style={{background:"#D9D9D9"}}></div>
                          </div>
                     </div>
                      )
                    })}
                 </div>
                </div>
             </div>
               )
            })
          } */}


          {/* section3 */}
          <div className="product4-section3">
              <div className="main-pbannercard" style={{height:"40rem"}}>
                     <div className="pbannercard-left" >
                        {/* <div className="pbannercard-left-title" style={{textAlign:"left"}}>Door pull with <br /> Main door lock</div>
                        <div className="pbannercard-left-info">{des3} </div> */}
                        {
                          prod?.Door_pull_with_Main_door_lock_Information?.map((item,i)=>{
                            return(
                              <>
                              <div className="pbannercard-left-title" style={{textAlign:"left"}}>{item?.type === 'heading' ? item?.children?.[0]?.text : ""}</div>
                              <div className="pbannercard-left-info">
                                {item?.type === 'paragraph' ? item?.children?.[0]?.text : ""} 
                              </div>
                              </>
                            )
                          })
                        }
                        {/* <div dangerouslySetInnerHTML={{ __html: prod?.Door_pull_with_Main_door_lock_Information}} /> */}
                         <div className="product4-section3-btns">
                             <div className="product4-section3-btn">
                               <div className="product4-section3-btn-title">Door Pulls</div>
                               <button>Explore</button>
                             </div>
                             <div className="product4-section3-btn">
                               <div className="product4-section3-btn-title">Main Door Locks</div>
                               <button>Explore</button>
                             </div>
                         </div>
                     </div>

                     <div className="pbannercard-right">
                       {/* <img src={img1} alt="" /> */}
                       <img src={`${ImgURL}${prod?.Door_pull_with_Main_door_lock_Image?.data?.attributes?.url}`} alt="" />
                      </div>
               </div>
          </div>

          {/* section4 */}
           <div className="product4-section4">
            <div className="main-pbannercard" style={{height:"38rem"}}>
                     <div className="pbannercard-left" >
                        {/* <div className="pbannercard-left-title" style={{textAlign:"left"}}>Door pull with <br /> Main door lock</div>
                        <div className="pbannercard-left-info">
                           {des4}
                         </div> */}
                         {/* <div dangerouslySetInnerHTML={{ __html: prod?.Mortise_Lock_Sets_Information}} /> */}
                         {
                          prod?.Mortise_Lock_Sets_Information?.map((item,i)=>{
                            return(
                              <>
                              <div className="pbannercard-left-title" style={{textAlign:"left"}}>{item?.type === 'heading' ? item?.children?.[0]?.text : ""}</div>
                              <div className="pbannercard-left-info">
                                {item?.type === 'paragraph' ? item?.children?.[0]?.text : ""} 
                              </div>
                              </>
                            )
                          })
                        }
                         <div className="product4-section3-btns">
                             <div className="product4-section3-btn">
                               <button>Explore</button>
                         </div>
                     </div>
                    </div>
                     <div className="pbannercard-right">
                       {/* <img src={img1} alt="" /> */}
                       <img src={`${ImgURL}${prod?.Mortise_Lock_Sets_Image?.data?.attributes?.url}`} alt="" />
                      </div>
           </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  )
}