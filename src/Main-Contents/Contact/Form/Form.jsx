import React, { useRef, useState } from 'react';
import './Form.css';
import { TiTick } from "react-icons/ti";
import arrow from '../../../images/contact-arrow.svg'
import builder from '../../../images/builder.png';
import interio from '../../../images/interio.png';
import customer from '../../../images/CustWh.png'
import other from '../../../images/custo.png';
import rightImg from "../../../images/contact-img.png";
import arch from '../../../images/arch.png';
import archWh from '../../../images/architect.svg';
import builderWh from '../../../images/builder.svg';
import interioWh from '../../../images/interio.svg';
import otherWh from '../../../images/others.svg';
import custBrown from '../../../images/CustBrown.jpg'



export default  function Form(props){

    const elm1 = useRef(null);
    const elm2  = useRef(null);
    const elm3 = useRef(null);
    const elm4 = useRef(null);
    const elm5 = useRef(null);
    const [st1,setSt1] = useState(false);
    const [st2,setSt2] = useState(false);
    const [st3,setSt3] = useState(false);
    const [st4,setSt4] = useState(false);
    const [st5,setSt5] = useState(false);
    const [chImg1,setChImg1] = useState(false);
    const [chImg2,setChImg2] = useState(false);
    const [chImg3,setChImg3] = useState(false);
    const [chImg4,setChImg4] = useState(false);
    const [chImg5,setChImg5] = useState(false);


    return(
        <>
           <div className="main-form">
              <div className="form-wrapper">
                 <div className="form-left">
                   <div className="form-left-content">
                        <div className="form-left-title">
                           <span> <img src={arrow}/> </span> What Brings You Here?
                        </div>
                        <div className="form-left-info"> What describes you the best ? </div>
                        <div className="form-left-boxes">

                             <div className="main-contactBox" onMouseEnter={()=>setChImg1(true)} onMouseLeave={()=>setChImg1(false)} onClick={()=>{
                                setSt1(!st1);setSt2(false);setSt3(false);setSt4(false);setSt5(false);
                                props.setUserData(userData =>({
                                   occupation:elm1.current.innerHTML
                                }))
                             }} style={st1?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={st1 || chImg1?arch:archWh} alt="" />
                                 <h1 ref={elm1}  style={st1?{color: "#4C341F"}:{}}>ARCHITECT</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle" style={st1?{background:"#4C341F",color:"#fff"}:{}}>
                                    {st1?<TiTick />:""}
                                 </div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onMouseEnter={()=>setChImg2(true)} onMouseLeave={()=>setChImg2(false)} onClick={()=>{
                                setSt1(false);setSt2(!st2);setSt3(false);setSt4(false);setSt5(false);
                                props.setUserData(userData =>({
                                 occupation:elm2.current.innerHTML
                              }))
                             }} style={st2?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={st2 || chImg2?builderWh:builder} alt="" />
                                 <h1 ref={elm2} style={st2?{color: "#4C341F"}:{}}>BUILDER</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle" style={st2?{background:"#4C341F",color:"#fff"}:{}}>
                                 {st2?<TiTick />:""}
                                 </div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onMouseEnter={()=>setChImg3(true)} onMouseLeave={()=>setChImg3(false)} onClick={()=>{
                                setSt1(false);setSt2(false);setSt3(!st3);setSt4(false);setSt5(false);
                                props.setUserData(userData =>({
                                 occupation:elm3.current.innerHTML
                              }))
                             }} style={st3?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={st3 || chImg3 ?interioWh: interio} alt="" />
                                 <h1 ref={elm3} style={st3?{color: "#4C341F"}:{}}>INTERIOR DESIGNER</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle" style={st3?{background:"#4C341F",color:"#fff"}:{}}>
                                 {st3?<TiTick />:""}
                                 </div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onMouseEnter={()=>setChImg4(true)} onMouseLeave={()=>setChImg4(false)} onClick={()=>{
                                setSt1(false);setSt2(false);setSt3(false);setSt4(!st4);setSt5(false);
                                props.setUserData(userData =>({
                                 occupation:elm4.current.innerHTML
                              }))
                             }} style={st4?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                <img src={st4 || chImg4 ?custBrown:customer} alt="" />
                                 <h1 ref={elm4} style={st4?{color: "#4C341F"}:{}}>CUSTOMER</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle" style={st4?{background:"#4C341F",color:"#fff"}:{}}>
                                 {st4?<TiTick />:""}
                                 </div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onMouseEnter={()=>setChImg5(true)} onMouseLeave={()=>setChImg5(false)} onClick={()=>{
                                setSt1(false);setSt2(false);setSt3(false);setSt4(false);setSt5(!st5);
                                props.setUserData(userData =>({
                                 occupation:elm5.current.innerHTML
                              }))
                             }} style={st5?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                <img src={st5 || chImg5?otherWh:other} alt="" />
                                 <h1 ref={elm5} style={st5?{color: "#4C341F"}:{}}>Others</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle" style={st5?{background:"#4C341F",color:"#fff"}:{}}>
                                 {st5?<TiTick />:""}
                                 </div>
                                  </div>
                              </div>   
                        </div>
                        <div className="form-left-btn" onClick={()=>{
                           if((st1 || st2 || st3 || st4 || st5 ) === true)
                           props.setI(1);
                           else
                           alert("Please Select a value");
                        }}>Continue</div>

                         <div className="form-filler">
                            <div className="form-bgColor"></div>
                         </div>

                   </div>
                 </div>
                 <div className="form-right">
                   <img src={rightImg} alt="" />
                 </div>
              </div>
           </div>
        </>
    )
}