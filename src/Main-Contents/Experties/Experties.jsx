import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Experties.css";
import Exp1 from "../../images/Experties.png";
import process from "../../images/process.png";
import { truncate } from "lodash";
import TmExp from "../TmExp/TmExp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import cop from "../../images/copper-pipes.png";
import alum from "../../images/aluminium.png";
import steel from "../../images/steel-pipes.png";
import zinc from "../../images/zinc.jpg";

import { gsap } from "gsap";
import SplitType from "split-type";
import axios from "axios";

const data = [
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
];

const Experties = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Adjust the threshold as needed
  });

  const [expertise, setExpertise] = useState(" ");
  const [process, setProcess] = useState(" ");
  const [use, SetUse] = useState(" ");

  const ImgURL = "http://localhost:1337";

  useEffect(() => {
    const baseURL = "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchExpertise = async () => {
      const res = await axios.get(`${baseURL}who-we-ares?populate=*`, {
        headers: headers,
      });
      console.log(res.data.data);
      setExpertise(res.data?.data[0]?.attributes);
    };

    const fetchProcess = async () => {
      const res = await axios.get(
        `${baseURL}who-we-ares?populate[the_processes][populate]=*`,
        {
          headers: headers,
        }
      );
      setProcess(res.data?.data[0]?.attributes?.the_processes?.data);
    };
    const fetchUse = async () => {
      const res = await axios.get(
        `${baseURL}who-we-ares?populate[what_we_uses][populate]=*`,
        {
          headers: headers,
        }
      );
      SetUse(res.data?.data[0]?.attributes?.what_we_uses?.data);
    };
    fetchExpertise();
    fetchProcess();
    fetchUse();
  }, []);

  useLayoutEffect(() => {
    const ourText = new SplitType(
      ".The-Process, .material-protray, .m-p-1, .hg",
      { types: "chars" }
    );
    const chars = ourText.chars;

    gsap.from(chars, {
      scrollTrigger: {
        trigger: ".top-sec",
        start: "top top",
        end: "bottom top",
        // markers: true
      },
      duration: 1,
      opacity: 0,
      yPercent: 100,
      ease: "power4.out",
      stagger: 0.05,
    });
  }, []);

  return (
    <>
      <Header />

      <div className="experties">
        <div className="top-sec">
          <div className="top-image">
            <img width="100%" height="100%" src={Exp1} /> 
           
      
            
          </div>
          <div className="highlights ">
            <div
              className="hg"
              style={{ textTransform: "uppercase", fontSize: "1.3rem" }}
            >
              Manufacturing Highlights
            </div>
            <div className="card-container m-w-c">
              <motion.div
                ref={ref}
                initial={{ y: "2rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 0.5,
                  type: "ease-in",
                }}
                className="card card1 exp-card"
              >
                {/* <div className="title">Precision & Design</div>
              <div className="info">
                Products designed per international standards.
              </div> */}
                <div dangerouslySetInnerHTML={{ __html: expertise?.Card1 }} />
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ y: "5rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 1,
                  type: "ease-in",
                }}
                className="card card2 exp-card"
              >
                {/* <div className="title">Surface Finishing:</div>
              <div className="info">
                A robust outer layer guarding through buffing, polishing,
                plating, and more - a crucial step for the desired texture.
              </div> */}
                <div dangerouslySetInnerHTML={{ __html: expertise?.Card2 }} />
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ y: "8rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
                className="card card3 exp-card"
              >
                {/* <div className="title">Quality Control:</div>
              <div className="info">
                Meticulous scrutiny, seamless cohesion - embracing a 3-stage
                quality inspection for optimal finish & enduring durability.
              </div> */}
                <div dangerouslySetInnerHTML={{ __html: expertise?.Card3 }} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* process */}
        <div className="container">
          <div className="process m-w-c">
            <div className="The-Process">
              The{" "}
              <span style={{ fontWeight: "bold", color: "#4C341F" }}>
                Process
              </span>
            </div>
            <div className="timeline-exp">
              <TmExp />
              <div
                style={{
                  display: "flex",
                  gap: "3rem",
                  flexDirection: "column",
                }}
              >
                {Array.isArray(process) &&
                  process?.map((item, i) => {
                    return (
                      <motion.div
                        ref={ref}
                        initial={{ y: "5rem" }}
                        whileInView={{ y: 0 }}
                        exit={{ opacity: 0, y: "2rem" }}
                        transition={{
                          duration: 1,
                          type: "ease-in",
                        }}
                        viewport={{ once: true }}
                        className="process-card"
                        key={i}
                      >
                        <div className="process-img1">
                          {/* <img width="100%" height="100%" src={item.img} alt="" /> */}
                          <img
                            height="100%"
                            src={`${ImgURL}${item?.attributes?.Image?.data?.attributes?.url}`}
                            alt=""
                          />
                        </div>
                        <div className="process-info">
                          {/* <div className="process-info-upper blt">{item.heading}</div>
                  <div className="process-info-bottom blt">
                    {truncate(item.info, { length: 250 })} 
                    
                  </div> */}
                          <div className="infoText"
                            dangerouslySetInnerHTML={{
                              __html: item?.attributes?.Information,
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* bottom */}
          <motion.div
            ref={ref}
            initial={{ y: "5rem" }}
            whileInView={{ y: 0 }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              marginBottom: "2rem",
            }}
            className="material m-w-c"
          >
            <div className="material-protray">
              Materials That Portray <br /> Quality & Style{" "}
            </div>
            <div
              className="m-p-1"
              style={{ textAlign: "left", color: "#1F1F1F", fontWeight: "450" }}
            >
              Materials, That Level Up.
            </div>
          </motion.div>

          {/* images */}
          <motion.div
            initial={{ y: "5rem" }}
            whileInView={{ y: 0 }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            viewport={{ once: true }}
            className="m-w-c"
            style={{
              textTransform: "uppercase",
              textAlign: "left",
              color: "#1F1F1F",
              fontWeight: "400",
              width: "100%",
            }}
          >
            what we use:
          </motion.div>
          <div className="process-bottom-images m-w-c">
            <div className="f-we">
              <motion.div
                ref={ref}
                initial={{ y: "5rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 0.3,
                  type: "ease-in",
                }}
                viewport={{ once: true }}
                className="p-b-i"
              >
                {/* <img src={cop} alt="" /> */}
                <img src={`${ImgURL}${use[0]?.attributes?.Image?.data?.attributes?.url}`} alt="" />
                <div class="overlay-text">
                  {/* <h3>Brass</h3>
                  <p style={{ fontSize: "12px" }}>
                    Offers durability that lasts <br />a lifetime
                  </p> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: use[0]?.attributes?.Information,
                    }}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: "5rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 0.6,
                  type: "ease-in",
                }}
                viewport={{ once: true }}
                className="p-b-i"
              >
                {/* <img src={steel} alt="" /> */}
                <img src={`${ImgURL}${use[1]?.attributes?.Image?.data?.attributes?.url}`} alt="" />
                <div class="overlay-text">
                  {/* <h3>Stainless Steel</h3>
                  <p style={{ fontSize: "12px" }}>
                    Handles moisture better than <br />
                    anything else.
                  </p> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: use[1]?.attributes?.Information,
                    }}
                  />
                </div>
              </motion.div>
            </div>

            <div className="s-we">
              <motion.div
                ref={ref}
                initial={{ y: "5rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 0.9,
                  type: "ease-in",
                }}
                viewport={{ once: true }}
                className="p-b-i"
              >
                <img src={`${ImgURL}${use[2]?.attributes?.Image?.data?.attributes?.url}`} alt="" />
                <div class="overlay-text">
                  {/* <h3>Zinc</h3>
                  <p style={{ fontSize: "12px" }}>
                    If safety is your numero
                    <br />
                    uno priority
                  </p> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: use[2]?.attributes?.Information,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ y: "5rem", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 1.2,
                  type: "ease-in",
                }}
                viewport={{ once: true }}
                className="p-b-i"
              >
                 <img src={`${ImgURL}${use[3]?.attributes?.Image?.data?.attributes?.url}`} alt="" />
                <div class="overlay-text">
                  {/* <h3>Aluminium</h3>
                  <p style={{ fontSize: "12px" }}>
                    Who doesn’t need a premium
                    <br /> feel, right?
                  </p> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: use[3]?.attributes?.Information,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <PreFooter />
      <Footer />
    </>
  );
};

export default Experties;
