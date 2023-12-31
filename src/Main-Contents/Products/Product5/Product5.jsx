import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Product5.css";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import img1 from "../../../images/prod-3.jpg";
import pimg from "../../../images/prod-5.jpg";
import axios from "axios";
export default function Product5() {
  const img = [1, 2, 3, 4];
  const des1 =
    "Explore the dependable functionality of our Butt Hinges, a staple in our Door Hinges collection. These hinges offer a seamless blend of strength and smooth motion, making them ideal for a variety of door types. ";
  const des2 =
    "Crafted for durability and ease of installation, they provide a reliable pivot point for your doors, ensuring long-lasting performance and a classic aesthetic.";

  const [prod, setProd] = useState(" ");
 

  const ImgURL = "http://localhost:1337";
  useEffect(() => {
    const baseURL =
      process.env.REACT_APP_API_URL || "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchProducts = async () => {
      const res = await axios.get(
        `${baseURL}door-hinges-and-control-systems?populate=*`,
        {
          headers: headers,
        }
      );
      console.log(res.data.data);
      setProd(res.data?.data[0].attributes);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="main-product5">
        <div className="product5-topbanner">
          <div className="product5-title">{prod?.Title}</div>
        </div>
        <div className="product5-midbanner">
          <div className="product5-midbanner-title">Door Hinges</div>
          <div className="midbanner-line"></div>
        </div>
        <div
          className="product5-banner"
          style={window.innerWidth <= 900 ? { display: "none" } : {}}
        >
          <PBannerCard prod={prod?.Butt_Hinges_Information} src={prod?.Butt_Hinges_Image?.data?.attributes?.url} />
          />
        </div>

        <div
          className="product5-colors"
          style={window.innerWidth <= 900 ? { display: "none" } : {}}
        >
          <div className="product5-colors-wrapper">
            <div className="product5-color-title">Available Color</div>
            <div className="product5-color-wrapper">
              <div
                className="product5-color"
                style={{ background: prod?.Butt_Hinges_Color1 }}
              ></div>
              <div
                className="product5-color"
                style={{ background: prod?.Butt_Hinges_Color2 }}
              ></div>
              <div
                className="product5-color"
                style={{ background: prod?.Butt_Hinges_Color3 }}
              ></div>
              <div
                className="product5-color"
                style={{ background: prod?.Butt_Hinges_Color4 }}
              ></div>
            </div>
          </div>
        </div>

        {/* mobile section banner */}
        <div
          className="product5-mob-banner"
          style={
            window.innerWidth <= 900
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "30px",
                }
              : { display: "none" }
          }
        >
          <img src={pimg} alt="" style={{ width: "100%" }} />
          <div className="product5-colors" style={{ width: "100%" }}>
            <div className="product5-colors-wrapper">
              <div className="product5-color-title">Available Color</div>
              <div className="product5-color-wrapper">
                <div
                  className="product5-color"
                  style={{ background: prod?.Butt_Hinges_Color1 }}
                ></div>
                <div
                  className="product5-color"
                  style={{ background: prod?.Butt_Hinges_Color2 }}
                ></div>
                <div
                  className="product5-color"
                  style={{ background: prod?.Butt_Hinges_Color3 }}
                ></div>
                <div
                  className="product5-color"
                  style={{ background: prod?.Butt_Hinges_Color4 }}
                ></div>
              </div>
            </div>
          </div>
          <h3 style={{ fontSize: "2rem" }}>Door Pull Lock Sets</h3>
          <p style={{ width: "100%", fontSize: "1rem", textAlign: "left" }}>
            {des1} <br /> <br /> {des2}
          </p>
        </div>

        {/* section1 */}
        <div className="product5-section1">
          <div className="product5-section1-title">Door Closure</div>
          <div className="product5-section1-wrapper">
            <div className="product5-section1-left">
              {/* <img src={img1} alt="" /> */}
              <img
                src={`${ImgURL}${prod?.Door_Closure_Main_Image?.data?.attributes?.url}`}
                alt=""
              />
            </div>
            <div className="product5-section1-right">
              {prod?.Door_Closure_Images?.data?.map((val) => {
                return <img src={`${ImgURL}${val?.attributes?.url}`} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
