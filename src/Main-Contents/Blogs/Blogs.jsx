import React from "react";
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
import {truncate} from 'lodash';
import { motion } from "framer-motion";

import "./Blogs.css";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";  
import Footer from "../Footer/Footer";
import m1 from "../../images/beautiful-door-house-with-beautiful-handle-it-s-nice-open-close-door.png"
import m2 from "../../images/image 39.png";
import m3 from "../../images/interior-door-beautiful-canvas-expensive-fittings-made-natural-veneer-door-fittings.png"
import m4 from "../../images/beautiful-hotel-insights-details.png";
import m5 from "../../images/detail-two-bronze-sphinx-heads-old-wooden-door-around-100-years-old-italian-palace-north-italy 1.png"

const Blogs = () => {
  const data = [
    {
      img: m1,
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {

      img: m2,
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: m3,
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: m4,
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: m5,
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
  ];
  return (
    <>
    <Header/>
   
    <div className="blogs">
      <div className="top-sec">
        <div
          style={{
            display: "flex",
            background: "#4C341F",
            justifyContent: "center",
            color: "#FFFBDB",
            alignItems: "center",
          }}
          className="top-image-blog"
        >
          <h1>Blogs</h1>
        </div>
        <div className="container" style={{justifyContent:'center',alignItems:'center'}}>
          <div style={{ marginBottom: "2rem" }} className="top-container m-w-c">
            <div className="top-container-left">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 350,
                  border: "1px solid #8C8F92",
                  borderRadius: "30px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, borderRadius: 50, paddingLeft: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
            <div className="top-container-right">
              <span className="top-container-right-tag">Tags:</span>
              <li>
                <ul>Mortise Locks</ul>
                <ul>Aldrop</ul>
                <ul>Handles</ul>
                <ul>Luxurious Collection</ul>
                <ul>Door closers</ul>
              </li>
            </div>
          </div>

          {/* items */}
          <div className="process m-w-c">
            {data.map((item, i) => {
              return (
                <motion.div
                initial={{ y: "5rem" }}
                whileInView={{ y: 0,  }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 1,
                  type: "ease-in",
                }}
                viewport={{once:true}}
                
                className="process-card" key={i}>
                  <div className=" bolgs-imgs">
                    <img width="100%" src={item.img} alt="" />
                  </div>
                  <div className="process-info-blog">
                    <div className=" blog-info-upper">{item.heading}</div>
                    <div className=" blog-info-bottom">{truncate(item.info,{length:400})}</div>

                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        color: "#51565D",
                        fontSize: "12px",
                      }}
                      className="d-c-v"
                    >
                      {/* date-comment-views */}
                      <span>{item.date}</span>
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <span>{item.views}</span>
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <span>{item.comment}</span>
                    </div>
                    <div className="read-more"
                      
                    >
                      <span>Read more</span>
                      <span className="arrow">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* items end */}
            <div style={{justifyContent:'center',display:'flex',alignItems:'center', width:"100vw"}}  className="pagination">
            <Stack style={{justifyContent:'center',display:'flex'}} spacing={2}>
            <Pagination count={15} shape="rounded" />
          </Stack>
            </div>
          
        </div>
      </div>
    </div>
            <PreFooter/>
            <Footer/>
    </>
  );
};

export default Blogs;