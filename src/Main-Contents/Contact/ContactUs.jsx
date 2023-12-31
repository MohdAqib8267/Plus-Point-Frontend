import React, { useState, useRef } from "react";
import "./ContactUs.css";
import Header from "../Header/Header";
import Form from "./Form/Form";
import Footer from "../Footer/Footer";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { GrDownload } from "react-icons/gr";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import Form2 from "./Form2/Form2";
import Form3 from "./Form3/Form3";
import Form4 from "./Form4/Form4";

export default function ContactUS() {
  const [i, setI] = useState(0);
  const [userData, setUserData] = useState({});

  const myElementRef = useRef(null);

  const scrollToElement = () => {
    const element = document.querySelector("#con-select");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadPDF = () => {
    // Replace 'path/to/your/existing.pdf' with the actual path to your existing PDF file
    const pdfUrl = "/11th(test-04)p.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "downloaded-document.pdf";

    // Append the anchor element to the document and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  };

  function handleForm() {
    switch (i) {
      case 0:
        return (
          <Form
            i={i}
            setI={setI}
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 1:
        return (
          <Form2
            i={i}
            setI={setI}
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 2:
        return (
          <Form3
            i={i}
            setI={setI}
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 3:
        return (
          <Form4
            i={i}
            setI={setI}
            userData={userData}
            setUserData={setUserData}
          />
        );
    }
  }

  return (
    <>
      <Header />
      <div className="m-main-contact">
        <div className="main-contact">
          <div className="contact-title">Contact Us</div>
          <div className="contact-info">
            <p style={{ fontSize: "1.575rem", fontWeight: "700" }}>
              Reach Out to Secure More – Your Questions, Our Commitment
            </p>
            <h3 style={{ fontWeight: "300" }}>
              Plus Point Customer {window.innerWidth < 900 ? <br /> : ""} Care
              Number: +91-9760792792 {window.innerWidth < 900 ? <br /> : "|"}
              Toll Free Number: 1800 180 333333
            </h3>
          </div>
          <div className="contact-btns-wrap">
            <button onClick={i === 3 ? handleDownloadPDF : scrollToElement}>
              {" "}
              <GrDownload style={{ fontSize: "1.5rem" }} /> Download our
              Resource
            </button>
            <button onClick={scrollToElement}>
              {" "}
              <LiaCartArrowDownSolid style={{ fontSize: "2.5rem" }} /> Where to
              buy?
            </button>
          </div>
          <div className="contact-link">
            <div className="contact-link-wrapper">
              <BsTelephone style={{ marginBottom: "20px" }} />
              <span style={{ marginBottom: "5px" }}>+91-9760-792792,</span>
              <span style={{ marginBottom: "5px" }}>+91-571-2410292</span>
              <span>011-43024168 </span>
            </div>
            <div className="contact-link-wrapper">
              <TfiEmail style={{ marginBottom: "20px" }} />
              <span style={{ marginBottom: "10px" }}>
                info@pluspointlocks.com
              </span>
              <span>delhi@pluspointlocks.com</span>
            </div>
            <div className="contact-link-wrapper">
              <CiLocationOn style={{ marginBottom: "20px" }} />
              <span>Street No. 4,Pala Road Aligarh</span>
              <span style={{ marginBottom: "10px" }}>
                202001 Uttar Pradesh (India)
              </span>
              <span>Industrial Area, Patparganj, 1st</span>
              <span>Floor, 347, New Delhi- 110092</span>
            </div>
          </div>
          <div
            ref={myElementRef}
            className="contact-content"
            style={{ marginTop: "5rem" }}
            id="con-select"
          >
            {handleForm()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}