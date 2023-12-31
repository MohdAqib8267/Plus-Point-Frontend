import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BlogInside from "../Blog-inside/BlogInside";

const Blogs = () => {

  const navigate = useNavigate();
  const [blog,setBlog]=useState(' ');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage,setTotalPage]=useState(' ');


  const ImgURL="http://localhost:1337"


  
  const baseURL = process.env.REACT_APP_API_URL|| "http://localhost:1337/api";
  const token = "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152"
 
   const headers = {
     Authorization: `Bearer ${token}`,
   };


   
  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update current page when a page is clicked
    
  };
console.log(currentPage);
  useEffect(()=>{
    
    const fetchAllData=async()=>{
      const res= await axios.get(`http://localhost:1337/api/blog-insides?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=4`,{
        headers:headers,    
      }) 
      // console.log(res.data.data);   
      setBlog(res.data.data);
    };

    fetchAllData();
  
   

  },[currentPage]);


  const handleClick = async(e) => {
    const clickedTag = e.target.textContent;
    // setClickedItem(clickedTag);
    console.log(clickedTag); 

    const res= await axios.get('http://localhost:1337/api/blog-insides?populate=*',{
      headers,
    })
    const data = res?.data?.data || [];
    
    
    

    const related = data.filter(item => {
      const tags = item?.attributes?.Tags;
      console.log(tags)
      return tags.includes(clickedTag);
    });
    
    related.length>0 && setBlog(related);
  };
 


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
        <div className="container" style={{justifyContent:'center',alignItems:'center',padding:"2rem 7rem"}}>
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
            <div className="top-container-right" >
              <span className="top-container-right-tag" >Tags:</span>
              <li>
                <ul onClick={handleClick} style={{cursor:"pointer"}}>Mortise Locks</ul>
                <ul onClick={handleClick} style={{cursor:"pointer"}}>Aldrop</ul>
                <ul onClick={handleClick} style={{cursor:"pointer"}}>Handles</ul>
                <ul onClick={handleClick} style={{cursor:"pointer"}}>Luxurious Collection</ul>
                <ul onClick={handleClick} style={{cursor:"pointer"}}>Door closers</ul>
              </li>
            </div>
          </div>

          {/* items */}
          <div className="process m-w-c">
            {blog && Array.isArray(blog) && blog?.map((item, i) => {
              const blogData=item.attributes;
             
              // console.log(blogData);
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
                    {/* <img width="100%" src={item.img} alt="" /> */}
                    <img src={`${ImgURL}${blogData?.Image?.data?.attributes?.url}`} alt="" />
                  </div>
                  <div className="process-info-blog">
                    <div className=" blog-info-upper"><div dangerouslySetInnerHTML={{ __html: blogData.Heading}} /></div>
                    <div className=" blog-info-bottom">
                    <div dangerouslySetInnerHTML={{ __html: truncate(blogData.Blog_Content,{length:500})}} />
                      </div>

                    <div>
                    <div className=" d-c-v"><div dangerouslySetInnerHTML={{ __html: blogData.createdAt.substring(0,10)}} /></div>
                    </div>
                    <div className="read-more" onClick={()=>{
                      navigate(`/blog/${item.id}`);
                    }}>
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

          
          {/* <div className="process m-w-c">
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
          </div> */}
          {/* items end */}
            <div style={{justifyContent:'center',display:'flex',alignItems:'center', width:"100vw"}}  className="pagination">
            <Stack style={{justifyContent:'center',display:'flex'}} spacing={2}>
            <Pagination count={15} onChange={handlePageChange} page={currentPage} shape="rounded" />
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