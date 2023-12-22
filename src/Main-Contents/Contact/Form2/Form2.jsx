import React, { useState } from 'react'
import './Form2.css';
import rightImg from "../../../images/contact-img.png";
import ContactBox from '../ContactBox/ContactBox';
import arrow from '../../../images/contact-arrow.svg'

export default function Form2(props) {

  const title=["MORTISE LOCK SET","DOOR PULL HANDLES","ALDROP DOOR KITS","MAIN DOOR LOCKS","CABINET LOCKS","CABINET HANDLES","DOOR DECORATIVE ACCESSORIES","DOOR HINGES","DOOR CLOSERS"];
  const [arr,setArr]=useState([]);
  return (
    <>
       <div className="main-form2">
              <div className="form2-wrapper">
                 <div className="form2-left">
                   <div className="form2-left-content">
                        <div className="form2-left-title">
                           <span> <img src={arrow} onClick={()=>{props.setI(0)}}/> </span> What’re you looking for?
                        </div>
                        <div className="form2-left-info"> Tap multiple categories to select them. </div>
                        <div className="form2-left-boxes">
                             {title.map((val)=>{
                                return <ContactBox st={true} arr={arr} setArr={setArr} title={val} userData={props.userData} setUserData={props.setUserData} />
                             })}

                        </div>
                        <div className="form2-left-btn" onClick={()=>{props.setI(2);
                        props.setUserData(userData => ({
                          ...userData,
                          interst:arr
                      }))
                        }}>Continue</div>
                        <div className="form-filler">
                            <div className="form-bgColor" style={{width:"50%"}}></div>
                         </div>
                   </div>
                 </div>
                 <div className="form2-right">
                   <img src={rightImg} alt="" />
                 </div>
              </div>
           </div>
    </>
  )
}