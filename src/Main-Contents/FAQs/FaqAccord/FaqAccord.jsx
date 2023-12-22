import React, { useState } from 'react'
import './FaqAccord.css'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
export default function FaqAccord(props) {

    const [faq,setFaqs] = useState(false);

  return (
    <>
      <div className="main-faqAccord" style={faq?{background:"#4C341F"}:{background:"#fff"}}>
          <div className="faqAccord-show">
              <div className="faqAccord-title" style={faq?{color:"#fff"}:{color:"black"}}>{props.title}</div>
              <div className="faqAccord-icon" onClick={()=>setFaqs(!faq)} style={!faq ? {display:"flex"}:{display:"none"}}><AiOutlinePlus /></div>
              <div className="faqAccord-icon" onClick={()=>setFaqs(!faq)} style={faq ? {display:"flex",color:"white"}:{display:"none"}}><AiOutlineMinus /></div>
          </div>
          <div className="faqAccord-hide" style={faq ?{maxHeight:"fit-content",padding:"2rem"}:{padding:"0 2rem",maxHeight:"0"}}>
             <p style={{marginTop:"-1.5rem"}}>
              {props.des}
             </p>
          </div>
     </div>
    </>
  )
}
