import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import media1 from "../../video/video1.mp4";
import { motion } from "framer-motion";
import "./Media.css";
import col1 from "./col1";
import col2 from "./col2";
import col3 from "./col3";
import homeMedia2 from "../../images/homeMedia-2.png";
import homeMedia3 from "../../images/homeMedia-3.png";
import homeMedia4 from "../../images/homeMedia-4.png";
import homeMedia5 from "../../images/homeMedia-5.png";
import vector1 from "../../images/media-vector1.svg";
import vector2 from "../../images/media-vector2.svg";
import Award1 from "../../images/Award1.png";
import Award2 from "../../images/Award2.png";
import axios from "axios";

const varients1 = {
  initial: {
    x: -20,
  },
  animate: {
    x: 0,
    duration: 1,
    type: "spring",
  },
};
export default function Media() {
  const [height, setHeight] = useState(false);
  const [media, setMedia] = useState(" ");
  const [mediaLength,setMediaLength]=useState(0);
  const [mediaAwards,setMediaAwards]=useState(' ');
  const [showAwrds1, setShowAwards1] = useState(false);
  const [showAwrds2, setShowAwards2] = useState(false);

  useEffect(
    () => {},
    window.addEventListener("scroll", () => {
      if (window.innerWidth >= 1000 && window.pageYOffset > 400) {
        setHeight(true);
      } else if ((window.innerWidth < 1000) & (window.pageYOffset > 50)) {
        setHeight(true);
      } else {
        setHeight(false);
      }
    })
  );
  const ImgURL = "http://localhost:1337";
  useEffect(() => {
    const baseURL =
      process.env.REACT_APP_API_URL || "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchMedia = async () => {
      const res = await axios.get(
        `http://localhost:1337/api/medias?populate=*`,
        {
          headers: headers,
        }
      );
      setMedia(res.data?.data[0]?.attributes?.Images?.data);
      setMediaLength(Math.ceil(res.data?.data[0]?.attributes?.Images?.data?.length / 3));
      console.log(res.data.data);
    };
    const fetchMediaAward = async () => {
      const res = await axios.get(
        `http://localhost:1337/api/medias?populate[awards][populate]=*`,
        {
          headers: headers,
        }
      );
      setMediaAwards(res.data.data[0].attributes?.awards?.data);
      console.log(res.data.data);
    };
    fetchMedia();
    fetchMediaAward();
  }, []);

  // console.log(mediaLength)

  return (
    <>
      <Header />
      <div
        className="m-main-media"
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="main-media">
          <div className="media-content-1">
            <div
              className={
                height
                  ? "media-content-1-title1 med-hOn"
                  : "media-content-1-title1 med-hOf"
              }
            >
              Plus
            </div>
            <video
              src={media1}
              autoPlay
              loop
              muted
              className={height ? "med-hOn" : ""}
              style={height ? { display: "none" } : {}}
            ></video>
            <div
              className={
                height
                  ? "media-content-1-title2 med-hOn"
                  : "media-content-1-title2 med-hOf2"
              }
            >
              Point
            </div>
            <div
              className={
                height
                  ? "media-content-1-wrapper med-wrapOn"
                  : "media-content-1-wrapper"
              }
            >
              <div className="media-content-1-col1 med-col1">
                <div className="media-content-1-img">
                  {Array.isArray(media) &&
                    media.map((val, i) => {
                      if (i <= mediaLength) {
                        return (
                          <motion.div
                            initial={
                              window.innerWidth < 1000
                                ? { y: "5rem" }
                                : { y: "15rem" }
                            }
                            whileInView={{ y: "0" }}
                            transition={{
                              duration: 1,
                              type: "ease",
                            }}
                            className="div"
                            style={{
                              width: "100%",
                              height: "fit-content",
                              overflow: "hidden",
                              top: "",
                            }}
                          >
                            <img
                              src={`${ImgURL}${val.attributes?.url}`}
                              alt=""
                            />
                          </motion.div>
                        );
                      }
                    })}
                  {/* {col1.map((val)=>{
                              return(
                                <motion.div 
                                initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                                whileInView={{y:"0"}}
                                transition={{
                                  duration:1,
                                  type:'ease'
                                }}
                                className="div" style={{width:"100%",height:"fit-content",overflow:"hidden",top:""}}>
                                <img src={val.img} alt="" />
                                </motion.div>
                              )
                           })} */}
                </div>
              </div>
              <div className="media-content-1-col2 med-col2">
                <div className="media-content-1-img">
                {
                Array.isArray(media) &&
                media.map((val, i) => {
                //  console.log(mediaLength,i);
                 if(i>mediaLength && i<2*mediaLength && i<media.length){
                  return(
                    <motion.div 
                    initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                    whileInView={{y:"0"}}
                    transition={{
                      duration:1,
                      type:'ease'
                    }} className="div" style={{width:"100%",height:"fit-content",overflow:"hidden"}}>
                     <img
                              src={`${ImgURL}${val.attributes?.url}`}
                              alt=""
                            />
                    </motion.div>
                  )
                 }
                })
              }
      

                  {/* {col2.map((val)=>{
                              return(
                                <motion.div 
                                initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                                whileInView={{y:"0"}}
                                transition={{
                                  duration:1,
                                  type:'ease'
                                }} className="div" style={{width:"100%",height:"fit-content",overflow:"hidden"}}>
                                <img src={val.img} alt="" />
                                </motion.div>
                              )
                           })} */}
                </div>
              </div>
              <div className="media-content-1-col3 med-col3">
                <div className="media-content-1-img">
                {
                Array.isArray(media) &&
                media.map((val, i) => {
                //  console.log(mediaLength,i);
                 if(i>=2*mediaLength && i<media.length){
                  return(
                    <motion.div 
                    initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                    whileInView={{y:"0"}}
                    transition={{
                      duration:1,
                      type:'ease'
                    }} className="div" style={{width:"100%",height:"fit-content",overflow:"hidden"}}>
                     <img
                              src={`${ImgURL}${val.attributes?.url}`}
                              alt=""
                            />
                    </motion.div>
                  )
                 }
                })
              }
                  {/* {col3.map((val) => {
                    return (
                      <motion.div
                        initial={
                          window.innerWidth < 1000
                            ? { y: "5rem" }
                            : { y: "15rem" }
                        }
                        whileInView={{ y: "0", opacity: "1" }}
                        transition={{
                          duration: 1,
                          type: "ease",
                        }}
                        className="div"
                        style={
                          val.blank
                            ? {
                                width: "100%",
                                height: "13%",
                                visibility: "hidden",
                              }
                            : {
                                width: "100%",
                                height: "fit-content",
                                overflow: "hidden",
                              }
                        }
                      >
                        <img src={val.img} alt="" />
                      </motion.div>
                    );
                  })} */}
                </div>
              </div>
            </div>
            <div className="Media-content-1-btn">See Less</div>
          </div>
          <div className="media-content-2">
            <div className="media-content-2-title">
              <h1>PLUS POINT BUILDSWARE</h1>
              <p>Indexcellence award 2023 Indexcellence award 2023 award </p>
            </div>
            <div className="media-content-2-slider">
              <div className="media-content-2-slide-track">
                {/* first one  */}
                <div className="med-slide">
                  <img src={homeMedia2} alt="" />
                </div>
                <div className="med-slide">
                  <img src={homeMedia3} alt="" />
                </div>
                <div className="med-slide">
                  <img src={homeMedia4} alt="" />
                </div>
                <div className="med-slide">
                  <img src={homeMedia5} alt="" />
                </div>

                {/* second - one */}
                <div className="med-slide">
                  <img src={homeMedia2} alt="" />
                </div>
                <div className="med-slide">
                  <img src={homeMedia3} alt="" />
                </div>
                <div className="med-slide">
                  <img src={homeMedia4} alt="" />
                </div>
                <div className="med-slide">
                  <img src={homeMedia5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="media-content-3">
            <div className="media-content-3-wrapper">
              <div className="media-content-3-title">Awards</div>
              <div className='media-content-3-info'>Celebrating the milestones and accolades that set us apart</div>
              <div className="media-content-3-awards">
                {Array.isArray(mediaAwards) && mediaAwards.map((item,i)=>{
                  return(
                    <div className="media-content-3-award">
                  <div className="media-content-3-award-wrapper">
                    <div className="media-content-3-award-top">
                      {/* <img src={Award1} alt="" style={{ width: "5.5rem" }} /> */}
                      <img
                              src={`${ImgURL}${item.attributes?.Image?.data[0]?.attributes?.url}`}
                              alt=""
                            />

                    </div>
                    <img src={vector1} alt="" />
                    <div className="media-content-3-awardBox">
                      {/* <div className="media-awardBox-title">
                        Best door & hardware & accessories 2018-19
                      </div>
                      <div className="media-awardBox-info">
                        Brand Leadership Award
                      </div> */}
                      <div dangerouslySetInnerHTML={{ __html: item?.attributes?.Information}} />
                    </div>

                    <img src={vector2} alt="" />
                  </div>
                </div>
                  )
                })}
                {/* <div className="media-content-3-award">
                  <div className="media-content-3-award-wrapper">
                    <div className="media-content-3-award-top">
                      <img src={Award1} alt="" style={{ width: "5.5rem" }} />
                    </div>
                    <img src={vector1} alt="" />
                    <div className="media-content-3-awardBox">
                      <div className="media-awardBox-title">
                        Best door & hardware & accessories 2018-19
                      </div>
                      <div className="media-awardBox-info">
                        Brand Leadership Award
                      </div>
                    </div>

                    <img src={vector2} alt="" />
                  </div>
                </div> */}
                {/* <div className="media-content-3-award">
                  <div className="media-content-3-award-wrapper">
                    <div className="media-content-3-award-top">
                      <img src={Award2} alt="" />
                    </div>
                    <img src={vector1} alt="" />
                    <div className="media-content-3-awardBox">
                      <div className="media-awardBox-title">
                        The Indexcellence award Innovative space concept
                      </div>
                      <div className="media-awardBox-info">Delhi 2023</div>
                    </div>

                    <img src={vector2} alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
