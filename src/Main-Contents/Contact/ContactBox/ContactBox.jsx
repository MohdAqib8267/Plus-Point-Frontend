import React, { useRef, useState } from 'react'
import './ContactBox.css'
import { TiTick } from "react-icons/ti";

export default function ContactBox(props) {

    const elm = useRef(null);
    const [st,setSt]=useState(false);

  return (
       <>
          <div className="main-contactBox" onClick={()=>{setSt(!st);
           props.setArr([...props.arr,elm.current.innerHTML]);
        }} style={st?{background:" #FFFCC8"}:{}}>
              <div className="contactBox-wrapper">
                 { props.st ? "" : <img src={props.img} alt="" />}
                  <h1 ref={elm} style={st?{color: "#4C341F"}:{}}>{props.title}</h1>
              </div>
              <div className="contactBox-check">
                  <div className="contact-circle" style={st?{background:"#4C341F",color:"#fff"}:{}}>
                    <TiTick />
                  </div>
              </div>
          </div>
       </>
  )
}