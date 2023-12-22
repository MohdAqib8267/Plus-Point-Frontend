import React, {useEffect, useState } from 'react'
import './HomeAccordian.css'
import prod1 from '../../../images/prod-1.jpg';
import prod2 from '../../../images/prod-2.jpg';
import prod3 from '../../../images/prod-3.jpg';
import prod4 from '../../../images/prod-4.png';
import prod5 from '../../../images/prod-5.jpg';
import prod6 from '../../../images/prod-6.png';
import prod7 from '../../../images/prod-7.jpg';
import prod8 from '../../../images/prod-8.jpg';
import prod9 from '../../../images/prod-9.jpg';
export default function HomeAccordian() {
    const [state1,setState1] =useState(false);
    const [state2,setState2] =useState(true);
    const [state3,setState3] =useState(false);
    const [state4,setState4] =useState(false);
    const [state5,setState5] =useState(false);
    const [state6,setState6] =useState(false);
    const [state7,setState7] =useState(false);
    const [state8,setState8] =useState(false);
    const [state9,setState9] =useState(false);
    const [stImg,setStImg] = useState(1);



    const imgSet=[prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9];
    //  const imgSet = ["1","2","3","4","5","6","7","8","9"];

  return (
      <>
        <div className="main-homeAccordian xyz">
              <div className="homeAccordian-left">
              <img  src={imgSet[stImg]} alt="" />
              </div>
              <div className="homeAccordian-right">
              <p className={state1 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.50)"}} onMouseEnter={()=>{
                    setStImg(0);
                    setState1(!state1);setState2(false);setState3(false);
                    setState4(false);setState5(false);setState6(false);
                    setState7(false);setState8(false);setState9(false);
                }} >Mortise Lock Set</p>
                <p className={state2 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.50)"}} onMouseEnter={()=>{
                     if(state2 === false){
                        setStImg(1);
                        setState1(false);setState2(!state2);setState3(false);
                        setState4(false);setState5(false);setState6(false);
                        setState7(false);setState8(false);setState9(false);
                     }
                    }}>Aldrop Door Set</p>
                    <p className={state3 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.50)"}} onMouseEnter={()=>{
                        setStImg(2); setState1(false);setState2(false);setState3(!state3);
                      
                      setState4(false);setState5(false);setState6(false);
                      setState7(false);setState8(false);setState9(false);
                    }}>Door Pull Handles</p>
                    <p className={state4 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.40)"}} onMouseEnter={()=>{
                          setStImg(3); setState1(false);setState2(false);setState3(false);
                        setState4(!state4);setState5(false);setState6(false);
                        setState7(false);setState8(false);setState9(false);
                    }}>Main Door Locks</p>
                    <p className={state5 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.30)"}}onMouseOver={()=>{
                        setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(!state5);setState6(false);
                     setState7(false);setState8(false);setState9(false);
                    }}>Door Lock & Latches</p>
                    <p className={state6 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.20)"}} onMouseEnter={()=>{
                        setStImg(5);setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(!state6);
                     setState7(false);setState8(false);setState9(false);
                    }}> Door Hinges & Control System</p>
                    <p className={state7 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.15)"}} onMouseEnter={()=>{
                        setStImg(6);setState1(false);setState2(false);setState3(false);
                     setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(false);
                     setState7(!state7);setState8(false);setState9(false);
                    }}>Furniture Locks & Accessories</p>
                    <p className={state8 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.15)"}} onMouseEnter={()=>{
                        setStImg(7);setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(false);
                     setState7(false);setState8(!state8);setState9(false);
                    }}>Decoratives</p>
                    <p className={state9 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.12)"}} onMouseEnter={()=>{
                        setStImg(8);setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(false);
                     setState7(false);setState8(false);setState9(!state9);
                    }}>Door Accessories</p>
              </div>
        </div>
      </>
  )
}
