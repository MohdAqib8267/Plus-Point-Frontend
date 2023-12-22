import React from 'react'
import { useState } from 'react';
import './HomePhAccord.css';
import doorPull from '../../../images/doorPull.png'
import prod1 from '../../../images/prod-1.jpg';
import prod2 from '../../../images/prod-2.jpg';
import prod3 from '../../../images/prod-3.jpg';
import prod4 from '../../../images/prod-4.png';
import prod5 from '../../../images/prod-5.jpg';
import prod6 from '../../../images/prod-6.png';
import prod7 from '../../../images/prod-7.jpg';
import prod8 from '../../../images/prod-8.jpg';
import prod9 from '../../../images/prod-9.jpg';

export default function HomePhAccord() {

  const [state1,setState1] =useState(false);
  const [state2,setState2] =useState(true);
  const [state3,setState3] =useState(false);
  const [state4,setState4] =useState(false);
  const [state5,setState5] =useState(false);
  const [state6,setState6] =useState(false);
  const [state7,setState7] =useState(false);
  const [state8,setState8] =useState(false);
  const [state9,setState9] =useState(false);

  return (
    <>
      <div className="main-homePhAccord">
          <div className="homePhAccord-content">
               <div className={state1?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.50)"}} onClick={()=>{
            setState1(!state1);setState2(false);setState3(false);
            setState4(false);setState5(false);setState6(false);
            setState7(false);setState8(false);setState9(false);
          }}>Mortise Lock Set</div>
               <div className="homePhAccord-bottom" style={state1?{}:{display:"none"}}>
               <img src={prod1} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state2?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.50)"}} onClick={()=>{
                     if(state2 === false){
                        setState1(false);setState2(!state2);setState3(false);
                        setState4(false);setState5(false);setState6(false);
                        setState7(false);setState8(false);setState9(false);
                     }
                    }}>Aldrop Lock Set</div>
               <div className="homePhAccord-bottom" style={state2?{}:{display:"none"}}>
               <img src={prod2} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state3?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.50)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(!state3);
                      setState4(false);setState5(false);setState6(false);
                      setState7(false);setState8(false);setState9(false);
                    }}>Door Pull Handles</div>
               <div className="homePhAccord-bottom" style={state3?{}:{display:"none"}}>
               <img src={prod3} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state4?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.40)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(false);
                      setState4(!false);setState5(false);setState6(false);
                      setState7(false);setState8(false);setState9(false);
                    }}>Main Door Lock Set</div>
               <div className="homePhAccord-bottom" style={state4?{}:{display:"none"}}>
               <img src={prod4} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state5?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.30)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(false);
                      setState4(false);setState5(!state5);setState6(false);
                      setState7(false);setState8(false);setState9(false);
                    }}>Door Locks & Latches</div>
               <div className="homePhAccord-bottom" style={state5?{}:{display:"none"}}>
               <img src={prod5} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state6?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.20)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(false);
                      setState4(false);setState5(false);setState6(!state6);
                      setState7(false);setState8(false);setState9(false);
                    }}> Door Hinges & Control System</div>
               <div className="homePhAccord-bottom" style={state6?{}:{display:"none"}}>
               <img src={prod6} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state7?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.15)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(false);
                      setState4(false);setState5(false);setState6(false);
                      setState7(!state7);setState8(false);setState9(false);
                    }}>Furniture Locks & Accessories</div>
               <div className="homePhAccord-bottom" style={state7?{}:{display:"none"}}>
               <img src={prod7} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state8?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.15)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(false);
                      setState4(false);setState5(false);setState6(false);
                      setState7(false);setState8(!state8);setState9(false);
                    }}>Decoratives</div>
               <div className="homePhAccord-bottom" style={state8?{}:{display:"none"}}>
               <img src={prod8} alt="" />
               </div>
          </div>
          <div className="homePhAccord-content">
               <div className={state9?"homePhAccord-top homePhstyle":"homePhAccord-top"} style={{background:"rgba(150, 105, 66, 0.12)"}} onClick={()=>{
                      setState1(false);setState2(false);setState3(false);
                      setState4(false);setState5(false);setState6(false);
                      setState7(false);setState8(false);setState9(!state9);
                    }}>Door Accessories</div>
               <div className="homePhAccord-bottom" style={state9?{}:{display:"none"}}>
               <img src={prod9} alt="" />
               </div>
          </div>
          
      </div>
    </>
  )
}
