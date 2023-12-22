import React, { useState } from 'react';
import './ContactUs.css';
import Header from '../Header/Header';
import Form from './Form/Form';
import Footer from '../Footer/Footer';
import {BsTelephone} from 'react-icons/bs';
import {TfiEmail} from "react-icons/tfi";
import {CiLocationOn} from 'react-icons/ci';
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';


export default function ContactUS() {

   const [i,setI] = useState(0);
   const [userData,setUserData] = useState({})

   function handleForm(){
      switch(i){
         case 0 : return <Form i={i} setI={setI} userData={userData} setUserData={setUserData} />
         case 1: return <Form2 i={i} setI={setI} userData={userData} setUserData={setUserData}/>
         case 2: return <Form3 i={i} setI={setI} userData={userData} setUserData={setUserData}/>
      }
   }

  return (
     <>
        <Header />
       <div className="m-main-contact">
       <div className="main-contact">
           <div className="contact-title" style={(i != 0)?{display:"none"}:{}}>Contact Us</div>
           <div className="contact-info" style={(i != 0)?{display:"none"}:{}}>
              <h5 style={{fontWeight:"normal"}}>Need more guidance ?</h5>
              <p>Connect with our expert team at Godrej for guided assistance and answers to all your queries on our dedicated helpdesk.</p>
              <h3>Plus Point Customer Care Number: 18002095511</h3>
           </div>
           <div className="contact-link" style={(i != 0)?{display:"none"}:{}}>
              <div className="contact-link-wrapper">
                  <BsTelephone />
                  <span>+91-9760-792792,</span>
                  <span>+91-571-2410292</span>
              </div>
              <div className="contact-link-wrapper">
                   <TfiEmail />
                   <span>info@pluspointlocks.com</span>
              </div>
              <div className="contact-link-wrapper">
                <CiLocationOn />
                <span>Street No. 4,Pala RoadAligarh</span>
                <span>202 001Uttar Pradesh (India)</span>
              </div>
           </div>
           <div className="contact-content">
              {handleForm()}
           </div>
       </div>
       </div>
       <Footer />
     </>
  )
}