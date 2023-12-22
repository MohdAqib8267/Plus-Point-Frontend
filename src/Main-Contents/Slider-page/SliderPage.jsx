import React, { useEffect, useRef, useState } from "react";

import './SliderPage.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
      title1:1942,
      title2:"Building a Legacy:",

    subtitle1: "Dracaena Trifasciata",
    subtitle2: "Live the Beauty",
    info1: "In a small workshop",
    info2:  "our extraordinary journey began.",
    info3:   "Fueled by the passion and dedication of two brothers, we crafted locks and hardware, laying the foundation of our extraordinary legacy." ,
  },
  {
    src:
    "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title1:1942,
    title2:"Building a Legacy:",

  subtitle1: "Dracaena Trifasciata",
  subtitle2: "Live the Beauty",
  info1: "In a small workshop",
  info2:  "our extraordinary journey began.",
  info3:   "Fueled by the passion and dedication of two brothers, we crafted locks and hardware, laying the foundation of our extraordinary legacy." ,
  },
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
      title1:1942,
      title2:"Building a Legacy:",

    subtitle1: "Dracaena Trifasciata",
    subtitle2: "Live the Beauty",
    info1: "In a small workshop",
    info2:  "our extraordinary journey began.",
    info3:   "Fueled by the passion and dedication of two brothers, we crafted locks and hardware, laying the foundation of our extraordinary legacy." ,
  },
  
];

const SliderPage = () => {
  const ref=useRef(null);
  useEffect(()=>{
    setTimeout(()=>{
    const sections=gsap.utils.toArray('.slider');

    gsap.to(sections,{
      xPercent:-100*(sections.length-1),
      ease:'none',
      scrollTrigger:{
        start:'top top',
        trigger:ref.current,
        scroll:'.w-s',
        pin:true,
        scrub:0.5,
        span:1/(sections.length-1),
        end: () => `+=${ref.current.offsetWidth}`,
      }
    })
    ScrollTrigger.refresh();  
  })
  },[]);
  return (
    <div className="slider-page" ref={ref} >


{
  images.map((item, index) => (
    <GalleryItem key={index} item={item} index={index} />
  ))
}
      
      {/* <div className="slider">
        <div className="s-left">
          <h1 style={{color:"#4C3`41F",fontSize:'3rem'}}>
            1942
            <br />
            Building a Legacy:
          </h1>
          <span>
            In a small workshop, <span style={{color:"#1F1F1F",fontWeight:"600"}}>our extraordinary journey began.</span> Fueled by the
            passion and dedication of two brothers, we crafted <span style={{color:"#1F1F1F",fontWeight:"600"}}>locks and
            hardware</span> , laying the foundation of our extraordinary legacy.
          </span>
        </div>
        <div className="s-right">
          <div className="s-img">
            <img width="100%"
              src="https://s3-alpha-sig.figma.com/img/2d3a/fa2b/e2d0abcab555643a6eed240782fbb9e3?Expires=1696809600&Signature=lxwYrzDghSSzql-m8U3jVY248xiNa08X4ogEmOoBnShR8-WT-Ur-vPSZo8lJCtutYPHEA2LqNmPf9uNlAhlWe1r4t9cwyVmxCH2~JDU4Wm-3SbUdWWp~qmFC3MphSESF6HZPW-kuQE4hG96CoxjtS-12ozq1PbiUOQMKwUnJJ~hGi4ptPTrFsDLiMXONNtVWJTExUJXOaDs66daiWI7i1YZfN5C1ofrBb3EwFFO41mYWtb8WCPQ1b~ubu3x9vjy7EccirZEAQ2L9y9yQya9kzjrL2ZGd1oDtTB7~wiu5fUusw5oYlYc25kQ7CYq4l39GX6gqL4ab6fblK~Ubqwu2eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="s-left">
          <h1 style={{color:"#4C341F",fontSize:'3rem'}}>
            1942
            <br />
            Building a Legacy:
          </h1>
          <span>
            In a small workshop, <span style={{color:"#1F1F1F",fontWeight:"600"}}>our extraordinary journey began.</span> Fueled by the
            passion and dedication of two brothers, we crafted <span style={{color:"#1F1F1F",fontWeight:"600"}}>locks and
            hardware</span> , laying the foundation of our extraordinary legacy.
          </span>
        </div>
        <div className="s-right">
          <div className="s-img">
            <img width="100%"
              src="https://s3-alpha-sig.figma.com/img/2d3a/fa2b/e2d0abcab555643a6eed240782fbb9e3?Expires=1696809600&Signature=lxwYrzDghSSzql-m8U3jVY248xiNa08X4ogEmOoBnShR8-WT-Ur-vPSZo8lJCtutYPHEA2LqNmPf9uNlAhlWe1r4t9cwyVmxCH2~JDU4Wm-3SbUdWWp~qmFC3MphSESF6HZPW-kuQE4hG96CoxjtS-12ozq1PbiUOQMKwUnJJ~hGi4ptPTrFsDLiMXONNtVWJTExUJXOaDs66daiWI7i1YZfN5C1ofrBb3EwFFO41mYWtb8WCPQ1b~ubu3x9vjy7EccirZEAQ2L9y9yQya9kzjrL2ZGd1oDtTB7~wiu5fUusw5oYlYc25kQ7CYq4l39GX6gqL4ab6fblK~Ubqwu2eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="s-left">
          <h1 style={{color:"#4C341F",fontSize:'3rem'}}>
            1942
            <br />
            Building a Legacy:
          </h1>
          <span>
            In a small workshop, <span style={{color:"#1F1F1F",fontWeight:"600"}}>our extraordinary journey began.</span> Fueled by the
            passion and dedication of two brothers, we crafted <span style={{color:"#1F1F1F",fontWeight:"600"}}>locks and
            hardware</span> , laying the foundation of our extraordinary legacy.
          </span>
        </div>
        <div className="s-right">
          <div className="s-img">
            <img width="100%"
              src="https://s3-alpha-sig.figma.com/img/2d3a/fa2b/e2d0abcab555643a6eed240782fbb9e3?Expires=1696809600&Signature=lxwYrzDghSSzql-m8U3jVY248xiNa08X4ogEmOoBnShR8-WT-Ur-vPSZo8lJCtutYPHEA2LqNmPf9uNlAhlWe1r4t9cwyVmxCH2~JDU4Wm-3SbUdWWp~qmFC3MphSESF6HZPW-kuQE4hG96CoxjtS-12ozq1PbiUOQMKwUnJJ~hGi4ptPTrFsDLiMXONNtVWJTExUJXOaDs66daiWI7i1YZfN5C1ofrBb3EwFFO41mYWtb8WCPQ1b~ubu3x9vjy7EccirZEAQ2L9y9yQya9kzjrL2ZGd1oDtTB7~wiu5fUusw5oYlYc25kQ7CYq4l39GX6gqL4ab6fblK~Ubqwu2eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default SliderPage;
function GalleryItem({
 item,index
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      // updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div className="slider">
        <div className="s-left">
          <h1 style={{color:"#4C341F",fontSize:'3rem'}}>
            {item.title1}
            <br />
            {item.title2}
          </h1>
          <span>
            {item.subtitle1} <span style={{color:"#1F1F1F",fontWeight:"600"}}>{item.subtitle2}</span> {item.info3}
          </span>
        </div>
        <div className="s-right">
          <div className="s-img">
            <img width="100%"
              src="https://s3-alpha-sig.figma.com/img/2d3a/fa2b/e2d0abcab555643a6eed240782fbb9e3?Expires=1696809600&Signature=lxwYrzDghSSzql-m8U3jVY248xiNa08X4ogEmOoBnShR8-WT-Ur-vPSZo8lJCtutYPHEA2LqNmPf9uNlAhlWe1r4t9cwyVmxCH2~JDU4Wm-3SbUdWWp~qmFC3MphSESF6HZPW-kuQE4hG96CoxjtS-12ozq1PbiUOQMKwUnJJ~hGi4ptPTrFsDLiMXONNtVWJTExUJXOaDs66daiWI7i1YZfN5C1ofrBb3EwFFO41mYWtb8WCPQ1b~ubu3x9vjy7EccirZEAQ2L9y9yQya9kzjrL2ZGd1oDtTB7~wiu5fUusw5oYlYc25kQ7CYq4l39GX6gqL4ab6fblK~Ubqwu2eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
      </div>
  );
}
// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import "./SliderPage.css"; // Import your custom CSS file

// const Example = () => {
//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       <HorizontalScrollCarousel />
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-20%"], {
//     duration: 3000, // Optionally, you can adjust the animation duration
//   });

//   return (
//     <section ref={targetRef} className="relative custom-carousel">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4 custom-card-container">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group custom-card"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//         }}
//         className="custom-card-image"
//       ></div>
//       <div className="custom-card-title">
//         <p>{card.title}</p>
//       </div>
//     </div>
//   );
// };

// export default Example;



// const cards = [
//   {
//     url: "https://media.istockphoto.com/id/505239248/photo/humayun-tomb-new-delhi-india.jpg?s=612x612&w=0&k=20&c=UQTU6YOnVsSklzHi34cOhNW5AhsACDxKLiD9--T-3Kg=",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "https://media.gettyimages.com/id/482018359/photo/india-gate-new-delhi.jpg?s=612x612&w=gi&k=20&c=e9heXVuTwxzgoqCl2mEQjti5yAVKNZJgg9MtbfPcQlM=",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];

// import React from "react";

// const SliderPage = () => {
//   return (
//     <section class="section-timeline is-style-fg-colorWhite is-style-bg-colorBlack">
//       <div class="panels_wrap">
//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorGreen">1680</h3>

//                 <p>
//                   The Custom House was built, in response to increasing trade at
//                   the Quayside. Designed by Richard Allen, a bricklayer from
//                   Bideford, its most celebrated feature, the moulded lime
//                   plaster ceilings on the first floor, were created by another
//                   North Devon man, plasterer John Abbot from Frithelstock. The
//                   building would have been the forefront of fashion and must
//                   have seemed a great novelty in a city still dominated by
//                   timber framed buildings. Costing £3000 to build, it is
//                   believed to be the oldest brick building in Exeter. The nearby
//                   Quay House was built at the same time and remains one of the
//                   earliest commercial buildings still standing in any port in
//                   Britain.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/themes/ech/assets/img/content/section-timeline/timeline-1.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorYellow">
//                   1698-1701
//                 </h3>

//                 <p>
//                   The canal was deepened allowing sea going ships to reach the
//                   Quay. The little dock in front of the Quay House was infilled
//                   and the waterfront was remodelled.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/11/324-19.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorPink">1778</h3>

//                 <p>
//                   Originally the Eastern side of the building was occupied by
//                   The Wharfinger, an officer of the City Chamber as distinct
//                   from the Customs officials. However, in 1778 a separate
//                   building was constructed for him.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/11/E.CH_Image01.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorPurple">
//                   1827-1830
//                 </h3>

//                 <p>
//                   The final extension and enlargement of the canal was
//                   completed, along with the construction of the Canal Basin.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/11/E.CH_Image02-1024x694.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorGreen">
//                   1835-1836
//                 </h3>

//                 <p>
//                   The two large warehouses beside the Prospect Inn were built in
//                   anticipation of an increase in trade on the canal.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/12/1835.png"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorYellow">
//                   1850-1876
//                 </h3>

//                 <p>
//                   The cast iron transit shed, with its light iron structure and
//                   cobbled floor, was added to provide cover for goods unloaded
//                   on the quayside.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/11/Transit-Shed-at-quay-5.9.03-1024x768.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorPink">1989</h3>

//                 <p>
//                   After over 300 years, the Custom and Excise Service finally
//                   leave the building, which is restored by ECC and used as a
//                   base for the city&#8217;s archaeology unit.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/11/E.CH_Image03-1024x686.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="panel">
//           <div class="section-columns__inner">
//             <div class="row">
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-2">
//                 <h2 class="wp-block-heading">Exeter Custom House Timeline</h2>

//                 <h3 class="wp-block-heading has-style-fg-colorPurple">2015</h3>

//                 <p>
//                   A whole new lease of life is given to the building when it is
//                   taken over by ECQT and developed as an interpretation centre
//                   for the canal and quay. An exciting In range of arts and
//                   cultural activities now take place here.
//                 </p>
//               </div>
//               <div class="col-48-xs-48 col-48-md-19 col-48-md-offset-6">
//                 <img
//                   decoding="async"
//                   class="section-timeline__img"
//                   src="https://exetercustomhouse.co.uk/wp-content/uploads/2022/11/Jazz-on-the-Quay-2021-c-Felix-Northover-34-3-1024x683.jpg"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <div class="timeline">
//           <div class="timeline__progress"></div>

          // <ul class="years">
          //   <li data-position="1" class="year year--highlight">
          //     <span class="year__value">1680</span>
          //   </li>

          //   <li data-position="2" class="year ">
          //     <span class="year__value">1684</span>
          //   </li>

          //   <li data-position="3" class="year ">
          //     <span class="year__value">1688</span>
          //   </li>

          //   <li data-position="4" class="year ">
          //     <span class="year__value">1692</span>
          //   </li>

          //   <li data-position="5" class="year ">
          //     <span class="year__value">1694</span>
          //   </li>

          //   <li data-position="6" class="year ">
          //     <span class="year__value">1696</span>
          //   </li>

          //   <li data-position="7" class="year ">
          //     <span class="year__value">1698</span>
          //   </li>

          //   <li data-position="8" class="year year--highlight">
          //     <span class="year__value">1701</span>
          //   </li>

          //   <li data-position="9" class="year ">
          //     <span class="year__value">1704</span>
          //   </li>

          //   <li data-position="10" class="year ">
          //     <span class="year__value">1707</span>
          //   </li>

          //   <li data-position="11" class="year ">
          //     <span class="year__value">1709</span>
          //   </li>

          //   <li data-position="12" class="year ">
          //     <span class="year__value">1711</span>
          //   </li>

          //   <li data-position="13" class="year ">
          //     <span class="year__value">1737</span>
          //   </li>

          //   <li data-position="14" class="year ">
          //     <span class="year__value">1763</span>
          //   </li>

          //   <li data-position="15" class="year year--highlight">
          //     <span class="year__value">1778</span>
          //   </li>

          //   <li data-position="16" class="year ">
          //     <span class="year__value">1790</span>
          //   </li>

          //   <li data-position="17" class="year ">
          //     <span class="year__value">1800</span>
          //   </li>

          //   <li data-position="18" class="year ">
          //     <span class="year__value">1805</span>
          //   </li>

          //   <li data-position="19" class="year ">
          //     <span class="year__value">1810</span>
          //   </li>

          //   <li data-position="20" class="year ">
          //     <span class="year__value">1820</span>
          //   </li>

          //   <li data-position="21" class="year year--highlight">
          //     <span class="year__value">1830</span>
          //   </li>

          //   <li data-position="22" class="year ">
          //     <span class="year__value">1831</span>
          //   </li>

          //   <li data-position="23" class="year ">
          //     <span class="year__value">1832</span>
          //   </li>

          //   <li data-position="24" class="year ">
          //     <span class="year__value">1833</span>
          //   </li>

          //   <li data-position="25" class="year ">
          //     <span class="year__value">1834</span>
          //   </li>

          //   <li data-position="26" class="year ">
          //     <span class="year__value">1835</span>
          //   </li>

          //   <li data-position="27" class="year year--highlight">
          //     <span class="year__value">1836</span>
          //   </li>

          //   <li data-position="28" class="year ">
          //     <span class="year__value">1842</span>
          //   </li>

          //   <li data-position="29" class="year ">
          //     <span class="year__value">1848</span>
          //   </li>

          //   <li data-position="30" class="year ">
          //     <span class="year__value">1854</span>
          //   </li>

          //   <li data-position="31" class="year ">
          //     <span class="year__value">1860</span>
          //   </li>

          //   <li data-position="32" class="year ">
          //     <span class="year__value">1866</span>
          //   </li>

          //   <li data-position="33" class="year ">
          //     <span class="year__value">1872</span>
          //   </li>

          //   <li data-position="34" class="year year--highlight">
          //     <span class="year__value">1876</span>
          //   </li>

          //   <li data-position="35" class="year ">
          //     <span class="year__value">1900</span>
          //   </li>

          //   <li data-position="36" class="year ">
          //     <span class="year__value">1920</span>
          //   </li>

          //   <li data-position="37" class="year ">
          //     <span class="year__value">1940</span>
          //   </li>

          //   <li data-position="38" class="year ">
          //     <span class="year__value">1960</span>
          //   </li>

          //   <li data-position="39" class="year ">
          //     <span class="year__value">1980</span>
          //   </li>

          //   <li data-position="40" class="year year--highlight">
          //     <span class="year__value">1989</span>
          //   </li>

          //   <li data-position="41" class="year ">
          //     <span class="year__value">1993</span>
          //   </li>

          //   <li data-position="42" class="year ">
          //     <span class="year__value">1997</span>
          //   </li>

          //   <li data-position="43" class="year ">
          //     <span class="year__value">2001</span>
          //   </li>

          //   <li data-position="44" class="year ">
          //     <span class="year__value">2005</span>
          //   </li>

          //   <li data-position="45" class="year ">
          //     <span class="year__value">2009</span>
          //   </li>

          //   <li data-position="46" class="year year--highlight">
          //     <span class="year__value">2015</span>
          //   </li>

          //   <li data-position="47" class="year ">
          //     <span class="year__value">2017</span>
          //   </li>

          //   <li data-position="48" class="year ">
          //     <span class="year__value">2019</span>
          //   </li>

          //   <li data-position="49" class="year ">
          //     <span class="year__value">2021</span>
          //   </li>

          //   <li data-position="50" class="year ">
          //     <span class="year__value">2022</span>
          //   </li>
          // </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SliderPage;
