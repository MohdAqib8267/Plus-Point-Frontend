import React, { useLayoutEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Arrow from "@mui/icons-material/ArrowForward";
import DirectionsIcon from "@mui/icons-material/Directions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { truncate } from "lodash";
import { motion } from "framer-motion";
import "./BlogInside.css";
import Process from "../../images/process.png";
import Home1 from "../../images/homeNews-1.png";
import Home2 from "../../images/homeNews-2.png";
import Home3 from "../../images/homeNews-3.png";
import im1 from "../../images/beautiful-door-house-with-beautiful-handle-it-s-nice-open-close-door.png";
import l1 from "../../images/closeup-half-opened-door-wooden-door 1.png";
import l2 from "../../images/style-door-handle-natural-wooden-door-door-handle-element (1) 1.png";
import {
  ArrowBack,
  ArrowDownward,
  ArrowDownwardSharp,
  ArrowForward,
  Facebook,
  Instagram,
  Send,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import { gsap } from 'gsap'
import SplitType from 'split-type'

const BlogInside = () => {

  useLayoutEffect(()=>{
    const ourText = new SplitType('.t-h', { types: 'chars' })
    const chars = ourText.chars

    gsap.fromTo(
      chars,
      { 
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
        viewport:true,
      }
    )
  },[])  
  const profiles = [
    {
      img: "data:image/jpeg;base64,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",
      name: "Raghav Agarwal",
      profession: "Manufacturer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "Raghav Agarwal",
      profession: "Manufacturer",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  const data = [
    {
      img: im1,
      heading: "select the best material for your door hardware",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
  ];
  return (
    <>
      <Header />
      <div className="blog-inside">
        <div
          style={{
            display: "flex",
            background: "#4C341F",
            justifyContent: "center",
            color: "#FFFBDB",
            alignItems: "center",
          }}
          className="top-image t-h-c"
        >
          <h1
            
            className="t-h"
          >
            How to select the best material for your door <br /> hardware?
            Here’s a guide.
          </h1>
        </div>
        <div className="container">
          <div className="process m-w-c">
            {data.map((item, i) => {
              return (
                <div
                  initial={{ y: "5rem" }}
                  whileInView={{ y: 0 }}
                  exit={{ opacity: 0, y: "2rem" }}
                  transition={{
                    duration: 1,
                    type: "ease-in",
                  }}
                  viewport={{ once: true }}
                  className="process-card"
                  style={{ display: "flex", flexDirection: "column" }}
                  key={i}
                >
                  <motion.div
                    initial={{ y: "5rem" }}
                    whileInView={{ y: 0 }}
                    exit={{ opacity: 0, y: "2rem" }}
                    transition={{
                      duration: 1,
                      type: "ease-in",
                    }}
                    viewport={{ once: true }}
                    className=" blog-inside-image"
                  >
                    <img width="100%" height="100%" src={item.img} alt="" />
                  </motion.div>
                  <motion.div
                    initial={{ y: "5rem" }}
                    whileInView={{ y: 0 }}
                    exit={{ opacity: 0, y: "2rem" }}
                    transition={{
                      duration: 1,
                      type: "ease-in",
                    }}
                    viewport={{ once: true }}
                    className="process-info"
                  >
                    <div
                      style={{ fontSize: "1.5rem" }}
                      className="process-info-upper"
                    >
                      {item.heading}
                    </div>
                    <div className="process-info-bottom">{item.info}</div>
                    <br />
                    <div className="process-info-bottom">
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                      <br />
                      <br />
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: "5rem" }}
                    whileInView={{ y: 0 }}
                    exit={{ opacity: 0, y: "2rem" }}
                    transition={{
                      duration: 1,
                      type: "ease-in",
                    }}
                    viewport={{ once: true }}
                    className=" later-images"
                  >
                    <div className="later-image-1">
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={l1}
                        alt=""
                      />
                    </div>

                    <div className="later-image-2">
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={l2}
                        alt=""
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: "5rem" }}
                    whileInView={{ y: 0 }}
                    exit={{ opacity: 0, y: "2rem" }}
                    transition={{
                      duration: 1,
                      type: "ease-in",
                    }}
                    viewport={{ once: true }}
                    className="process-info"
                  >
                    <div
                      style={{ fontSize: "1.5rem" }}
                      className="process-info-upper "
                    >
                      Where can I get some?
                    </div>
                    <div className="process-info-bottom">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s
                      <br />
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                    </div>
                  </motion.div>
                  {/* <button className="s-m-btn">See More</button> */}
                </div>
              );
            })}
          </div>
          <Divider></Divider>
          <motion.div
            initial={{ y: "5rem" }}
            whileInView={{ y: 0 }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 1,
              type: "ease-in",
            }}
            viewport={{ once: true }}
            className="top-container m-w-c"
          >
            <div className="top-container-right">
              <span className="top-container-right-tag">Tags:</span>
              <li>
                <ul>Airdrop Locks</ul>
                <ul>Headlines</ul>

                <ul>Luxurious Collection</ul>
              </li>
            </div>
            <div className="top-container-right inside-blog-icon">
              <span className="top-container-right-tag ">
                Share This Article:
              </span>
              <li>
                <ul>
                  <WhatsApp />
                </ul>
                <ul>
                  <Facebook />
                </ul>

                <ul>
                  <Twitter />
                </ul>
                <ul>
                  <Instagram />
                </ul>
              </li>
            </div>
          </motion.div>
          <Divider />

          <motion.div
            initial={{ y: "5rem" }}
            whileInView={{ y: 0 }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 1,
              type: "ease-in",
            }}
            viewport={{ once: true }}
            className="prev-next m-w-c"
          >
            <span>
              <ArrowBack /> Prev
            </span>
            <span>
              Next <Arrow />
            </span>
          </motion.div>

          {/* comments */}
          <div className="blog-comments m-w-c">
            <motion.div
              initial={{ y: "5rem" }}
              whileInView={{ y: 0 }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 1,
                type: "ease-in",
              }}
              viewport={{ once: true }}
              className="comment-heading"
            >
              <span style={{ fontWeight: "600" }}>Comments</span>
              <span
                style={{
                  border: "2px solid black",
                  borderRadius: "30px",
                  padding: "10px 15px",
                }}
              >
                Recommended{" "}
              </span>
            </motion.div>
            <div className="comment-profile">
              <div style={{ padding: "1rem" }} className="process ">
                <hr
                  style={{
                    border: "1px solid rgba(203, 203, 203, 1)",
                    borderRadius: "5px",
                  }}
                />
                {profiles.map((item, i) => {
                  return (
                    <motion.div
                      initial={{ y: "5rem" }}
                      whileInView={{ y: 0 }}
                      exit={{ opacity: 0, y: "2rem" }}
                      transition={{
                        duration: 1,
                        type: "ease-in",
                      }}
                      viewport={{ once: true }}
                      style={{ display: "flex", flexDirection: "column" }}
                      className="process-card"
                      key={i}
                    >
                      <div
                        className="process-img cmt-img"
                        style={{ width: "auto", display: "flex", gap: "1rem" }}
                      >
                        <img width="100%" src={item.img} alt="" />
                        <div className="c-n-p">
                          <div
                            style={{
                              fontWeight: "300",
                              fontSize: "1.2rem",
                              marginBottom: "0rem",
                            }}
                            className="process-info-upper"
                          >
                            {item.name}
                          </div>
                          <div style={{ fontSize: "13px" }} className="pf">
                            {item.profession}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                        className="process-info"
                      >
                        <div
                          style={{
                            fontSize: "11px",
                            gap: "0.5rem",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          className="process-info-bottom main-cmt"
                        >
                          {truncate(item.comment, { length: 300 })}

                          <hr
                            style={{
                              border: "1px solid rgba(203, 203, 203, 1)",
                              borderRadius: "5px",
                            }}
                          />
                          <div
                            style={{ color: "rgba(103, 103, 103, 1)" }}
                            className="s-ans"
                          >
                            See Answer
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* your comment */}
              <motion.div
                initial={{ y: "5rem" }}
                whileInView={{ y: 0 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 1,
                  type: "ease-in",
                }}
                viewport={{ once: true }}
                style={{ marginTop: "3rem" }}
                className="share-cmt"
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    // border: "1px solid #8C8F92",
                    borderRadius: "5px",
                  }}
                  style={{ background: "rgba(239, 239, 239, 1)" }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1, borderRadius: 0, paddingLeft: 1 }}
                    placeholder="Type your Comments"
                    inputProps={{ "aria-label": "search google maps" }}
                    style={{ background: "rgba(239, 239, 239, 1)" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    style={{
                      background: "rgba(108, 108, 108, 1)",
                      color: "white",
                      borderRadius: "5px",
                      margin: "-2px",
                    }}
                  >
                    <Send />
                  </IconButton>
                </Paper>
              </motion.div>
            </div>
          </div>

          {/* Related Blogs */}
          <div style={{ marginTop: "1rem" }} className="rel-blog m-w-c">
            <motion.div
              initial={{ y: "5rem" }}
              whileInView={{ y: 0 }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 1,
                type: "ease-in",
              }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
              className="rel-blog-heading"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: "600",
                }}
                className="r-b-h-l"
              >
                Related Blogs
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: "600",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                className="r-b-h-r"
              >
                View More <ArrowForward />
              </div>
            </motion.div>

            <motion.div
            initial={{ y: "5rem" }}
            whileInView={{ y: 0,  }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 1,
              type: "ease-in",
            }}
            viewport={{once:true}}
            style={{ marginTop: "1.5rem" }} className="main-homeNews">
              <div
                style={{
                  justifyContent: "center",
                  gap: "2rem",
                  display: "flex",
                }}
                className="homeNews-contents "
              >
                <div className="homeNews-content h-c-b">
                  <img src={Home1} alt="" />
                  <div className="b-info">
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#1F1F1F",
                        fontSize: "1.3rem",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                    <br />
                    <div
                      style={{
                        textAlign: "left",
                        color: "rgba(96, 96, 96, 1)",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy{" "}
                    </div>
                  </div>
                </div>
                <div className="homeNews-content h-c-b">
                  <img src={Home2} alt="" />
                  <div className="b-info">
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#1F1F1F",
                        fontSize: "1.3rem",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                    <br />
                    <div
                      style={{
                        textAlign: "left",
                        color: "rgba(96, 96, 96, 1)",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy{" "}
                    </div>
                  </div>
                </div>
                <div className="homeNews-content h-c-b">
                  <img src={Home3} alt="" />
                  <div className="b-info">
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#1F1F1F",
                        fontSize: "1.3rem",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                    <br />
                    <div
                      style={{
                        textAlign: "left",
                        color: "rgba(96, 96, 96, 1)",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy{" "}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
};

export default BlogInside;
