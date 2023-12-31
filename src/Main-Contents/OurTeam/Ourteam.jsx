import React, { useEffect, useState } from "react";
import "./OurTeam.css";
import Header from "../Header/Header";
import img from "../../images/OurTeamBanner.png";
import img2 from "../../images/OurTeamPreFoot.png";
import data from "./ourTeamdata.js";
import OurteamCard from "./OurteamCard/OurteamCard";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import axios from "axios";
export default function Ourteam() {
  const ImgURL = "http://localhost:1337";
  const [ourTeam, setOurTeam] = useState(" ");
  const [members, setMembers] = useState(" ");

  useEffect(() => {
    const baseURL = "http://localhost:1337/api/";

    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchOurTeam = async () => {
      const res = await axios.get(`${baseURL}our-teams?populate=*`, {
        headers: headers,
      });
      // console.log(res.data.data);
      setOurTeam(res.data.data[0].attributes);
    };

    const fetchMembers = async () => {
      const res = await axios.get(
        `${baseURL}our-teams?populate[team_members][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data[0]?.attributes?.team_members?.data);
      setMembers(res.data.data[0]?.attributes?.team_members?.data);
    };
    fetchOurTeam();
    fetchMembers();
  }, []);
  return (
    <>
      <Header />
      <div className="our-team-main">
        <div className="our-team-banner">
          {/* <img src={img} alt="" className="our-team-banner-img"/> */}
          <img
            src={`${ImgURL}${ourTeam?.Banner_Image?.data?.attributes?.url}`}
            alt=""
            className="our-team-banner-img"
          />
          <div className="our-team-banner-grade"></div>
          <motion.p
            initial={{ x: "8rem" }}
            whileInView={{ x: 0 }}
            exit={{ opacity: 0, x: "2rem" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="our-team-banner-title"
          >
            <div dangerouslySetInnerHTML={{ __html: ourTeam.Heading }} />
          </motion.p>
        </div>
        <div className="our-team-content">
          <motion.div
            initial={{ y: "5rem" }}
            whileInView={{ y: 0 }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="our-team-content-1"
          >
            <h5>MEET OUR TEAM</h5>
            <h3>
              The leaders who <br />
              Inspire greatness…
            </h3>
          </motion.div>
          <div className="our-team-content-2">
            {Array.isArray(members) &&
              members.map((val, i) => (
                <OurteamCard
                  img={val?.attributes?.Image}
                  name={val?.attributes?.Name}
                  post={val?.attributes?.Profession}
                  info={val?.attributes?.Information}
                  key={i}
                />
              ))}
          </div>
        </div>
        <div className="our-team-content-3">
          {/* <img src={img2} alt="" className="out-team-content-3-img" /> */}
          <img
            src={`${ImgURL}${ourTeam?.Bottom_Image?.data?.attributes?.url}`}
            alt=""
            className="out-team-content-3-img"
          />
          <motion.p
            initial={{ x: "-10rem" }}
            whileInView={{ x: 0 }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="our-team-content-3-para"
          >
              <div dangerouslySetInnerHTML={{ __html: ourTeam.Bottom_Heading }} />
          </motion.p>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
