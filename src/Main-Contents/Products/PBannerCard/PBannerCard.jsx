import React from 'react'
import './PBannerCard.css'
import img1 from '../../../images/prod-1.jpg'
export default function PBannerCard(props) {
  
// console.log(props);


  var pimg="";
  props.img!=undefined?pimg=props.img:pimg=img1;

  const ImgURL = "http://localhost:1337";

  return (
    <div className="main-pbannercard" style={props.state!=undefined?{flexDirection:"row-reverse"}:{}}>
          <div className="pbannercard-left" >

          {props?.prod?.map((item, i) => {
              return (
                <div key={i}> 
                  <div className="pbannercard-left-title">
                    {item?.type === 'heading' ? item?.children?.[0]?.text : ""}
                  </div>
                  <div className="pbannercard-left-info">
                    {item?.type === 'paragraph' ? item?.children?.[0]?.text : ""} 
                  </div>
                </div>
              );
            })}
              {/* <div className="pbannercard-left-title">{props.title}</div>
              <div className="pbannercard-left-info">
               {props.des1 !=undefined?props.des1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."} <br /> <br />
               {props.des2 != undefined?props.des2:" commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              </div> */}
              {/* <div dangerouslySetInnerHTML={{ __html: props?.prod?.Information || props?.prod?.Door_Pull_Lock_Sets_Information || props.prodInformation}} /> */}
          </div>

          <div className="pbannercard-right" style={props.state!=undefined?{justifyContent:"flex-start"}:{}}>
             <img src={`${ImgURL}${props?.src}`} alt="" />
             {/* {
              props?.prod?.Door_Pull_Lock_Sets_Image?.data?.attributes?.url?(
                <img src={`${ImgURL}${props?.prod?.Door_Pull_Lock_Sets_Image?.data?.attributes?.url}`} alt="" />
              ):props?.prodImg?.data?.attributes?.url?(
                <img src={`${ImgURL}${props?.prodImg?.data?.attributes?.url}`} alt="" />
              ):(<img src={`${ImgURL}${props?.prod?.Image?.data?.attributes?.url}`}  alt=""/>)
             } */}
              
             {/* <img src={`${ImgURL}${props?.prodImg?.data?.attributes?.url}`} alt="" /> */}
          </div>
    </div> 
  )
}