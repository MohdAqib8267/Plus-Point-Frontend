import React, { useState } from 'react'
import './FAQs.css'
import Header from '../Header/Header';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer'
import FaqAccord from './FaqAccord/FaqAccord'
import faq1 from './faq1'
import faq2 from './faq2'

export default function FAQs() {

  const [moreFaq,setMoreFaq]= useState(false);
  const [see,setSee]= useState("View All FAQ");

  const viewAllFaq = ()=>{
    setMoreFaq(!moreFaq);
    if(see === "View All FAQ")
    setSee("View Less FAQ");
    else
    setSee("View All FAQ");
  }

  return (
    <>
     <Header />
       <div className="m-main-FAQS" style={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="main-FAQs">
         
          <div className="FAQ-content">
                 <div className="FAQ-content-left">
                    <div className="faq-content-left-title">Frequently Asked Questions</div>
                    <div className="faq-content-left-info">
                       Have some queries? Have a look at some of the questions that have been asked to us most often, might help :)
                    </div>
                    <div className="faq-content-left-view" onClick={viewAllFaq}>{see}</div>
                 </div>
                 <div className="FAQ-content-right">
                     {moreFaq ? faq2.map((val)=>{
                        return(
                          <FaqAccord title={val.que} des={val.ans} />
                        )
                     }) :
                     faq1.map((val)=>{
                      return(
                        <FaqAccord title={val.que} des={val.ans} />
                      )
                   })}
                 </div>
          </div>
          
      </div>
      </div>
      <PreFooter />
       <Footer />
    </>
  )
}
