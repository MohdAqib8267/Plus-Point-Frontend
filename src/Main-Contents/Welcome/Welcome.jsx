// import React, { useEffect, useState } from "react";
// import Exp1 from "../../images/Experties.png";
// import "./Welcome.css";
// import { useRef } from "react";
// import SliderPage from "../Slider-page/SliderPage";
// import Gallery from "../Gallery/index";
// import Slider from "../Slider/Slider";
// const Welcome = () => {
//   const ref = useRef(null);  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);

//   const slides = ["Slide 1", "Slide 2", "Slide 3"];
//   const scrollHandler = (e) => {
//     if (e.deltaY > 0 && currentIndex < slides.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//     setScrolling(true);
//   };

//   useEffect(() => {
//     let timeout;

//     const handleScrollStop = () => {
//       if (timeout) {
//         clearTimeout(timeout);
//       }

//       timeout = setTimeout(() => {
//         setScrolling(false);
//       }, 250); // Adjust the delay time as needed
//     };

//     window.addEventListener("wheel", scrollHandler);
//     window.addEventListener("scroll", handleScrollStop);

//     return () => {
//       window.removeEventListener("wheel", scrollHandler);
//       window.removeEventListener("scroll", handleScrollStop);
//     };
//   }, [currentIndex]);

//   const translateX = -currentIndex * 100;

//   return (
//     <div className="welcome">
//       <div className="top-sec">
//         <div className="top-image welcome-image">
//           <img width="100%" height="100%" src={Exp1} />
//         </div>
//       </div>
//       <div className="container-welcome">
//         <div style={{padding:'20px 50px'}} className="w-pp">
//           <div className="left-pp">
//             <h1 style={{ color: "rgba(0, 0, 0, 0.51)", fontSize: "3rem" }}>
//               Welcome to the <br /> World of
//               <br />
//               <span style={{ color: "#4C341F" }}>Plus Point</span>
//             </h1>
//           </div>
//           <div className="right-pp">
//             <div
//               style={{
//                 color: "#1F1F1F",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//               }}
//               className="w-h"
//             >
//               HARDWARE REVOLUTIONISED
//             </div>
//             <div style={{ color: "#1F1F1F" }} className="w-h-1">
//               <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
//                 ‘Every result or goal you want to achieve is preceded by a
//                 process.’
//               </span>{" "}
//               This was the motive behind the initiation of a phenomenon; a
//               phenomenon that we proudly call PlusPoint. This journey of ours
//               began long, long back - more than 80 years ago to be precise. It
//               was a family endeavour, fueled by the passion and dedication of
//               the brothers. Back then, one could never think what this journey
//               could turn out to be like. But we worked. We worked in a
//               relentless pursuit of perfection.
//             </div>
//             <div style={{ color: "1F1F1F" }} className="w-h-1">
//               <span>
//                 Having jewelled up lacs of homes during this course, we now
//                 stand on a mission to be your{" "}
//                 <span style={{ fontWeight: "500" }}>
//                   ONE STOP HARDWARE SOLUTION.
//                 </span>
//               </span>
//               <br />
//               <br />
//               With that, we welcome you to the world of PlusPoint. When you
//               choose Plus Point Locks & Hardware, you are not just purchasing a
//               product; you are becoming part of our story. We invite you to
//               explore our vast collection of locks and hardware, carefully
//               crafted to blend seamlessly with any architectural style. Whether
//               you seek the perfect lock for your front door or the finishing
//               touches for your renovation project, we are here to provide the
//               solution that perfectly matches your needs.
//               <br />
//               <br />
//               So come on in, join our family, and experience the magic unfold.
//             </div>
//           </div>
//         </div>

//         {/* slider page */}
//         {/* <div  className="main-container"
//           id="main-container"
//           data-scroll-container
//           ref={ref}> 
         
//          <Gallery />
//          </div> */}
//         {/* <div className="w-s">
//         <SliderPage />
//         </div> */}

//         <Slider/>
//       </div>
//     </div>
//   );
// };

// export default Welcome;







import React, { useEffect, useState } from "react";
import Exp1 from "../../images/Experties.png";
import "./Welcome.css";
import { useRef } from "react";
import {motion} from "framer-motion"
import img1 from "../../images/1.png"
import img2 from "../../images/2.png"

import Gallery from "../Gallery/index";
import Slider from "../Slider/Slider";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import SliderPh from "../SliderPh/SliderPh";
import TimelineV from '../Timeline/TimelineV';
const Welcome = () => {
  const [seeContent,setSeeContent]=useState(true);
  const handleSeeMore=()=>{
    setSeeContent((prev)=>!prev);
  }
  return (
    <>
    <Header/>
   
    <div className="welcome">
      <div className="top-sec">
        <div className="top-image welcome-image">
          <img width="100%" height="100%" src={Exp1} />
        </div>
      </div>
      <div className="container-welcome ">
        
        <div className="w-pp-center">
        <motion.div
        initial={{ y: "5rem" }}
        whileInView={{ y: 0,  }}
        exit={{ opacity: 0, y: "2rem" }}
        transition={{
          duration: 1,
          type: "ease-in",
        }}
        viewport={{once:true}}
        className="w-pp m-w-c">
       
          <div className="left-pp">
            <h1 className="wel-h" style={{ color: "rgba(0, 0, 0, 0.51)"}}>
              Welcome to the <br /> World of
              <br />
              <span style={{ color: "#4C341F" }}>Plus Point</span>
            </h1>
          </div>
          <div className="right-pp">
            <div
              style={{
                color: "#1F1F1F",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
              className="w-h"
            >
              HARDWARE REVOLUTIONISED
            </div>
            <div style={{ color: "#1F1F1F" }} className="w-h-1">
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                ‘Every result or goal you want to achieve is preceded by a
                process.’
              </span>{" "}
              This was the motive behind the initiation of a phenomenon; a
              phenomenon that we proudly call PlusPoint. This journey of ours
              began long, long back - more than 80 years ago to be precise. It
              was a family endeavour, fueled by the passion and dedication of
              the brothers. Back then, one could never think what this journey
              could turn out to be like. But we worked. We worked in a
              relentless pursuit of perfection.
            </div>
            <div>
              <button onClick={handleSeeMore} className="s-m-btn">{seeContent?"See Less":"See More"}</button>
            </div>
            {seeContent?
            <div style={{ color: "1F1F1F" }} className="w-h-1 w-h-11">
              <span>
                Having jewelled up lacs of homes during this course, we now
                stand on a mission to be your{" "}
                <span style={{ fontWeight: "500" }}>
                  ONE STOP HARDWARE SOLUTION.
                </span>
              </span>
              <br />
              <br />
              With that, we welcome you to the world of PlusPoint. When you
              choose Plus Point Locks & Hardware, you are not just purchasing a
              product; you are becoming part of our story. We invite you to
              explore our vast collection of locks and hardware, carefully
              crafted to blend seamlessly with any architectural style. Whether
              you seek the perfect lock for your front door or the finishing
              touches for your renovation project, we are here to provide the
              solution that perfectly matches your needs.
              <br />
              <br />
              So come on in, join our family, and experience the magic unfold.
            </div>
            :""}
          </div>
          
        </motion.div> 
       </div>
        
          <Slider />
        <SliderPh/>
        
           
       <div className="iso">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
       </div>

      </div>
    </div>
    <PreFooter/>
    <Footer />
    </>
  );
};

export default Welcome;
