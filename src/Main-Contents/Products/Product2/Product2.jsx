import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Product2.css";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import { AiOutlineDown } from "react-icons/ai";
import { FaRegSquare } from "react-icons/fa";
import img1 from "../../../images/prod-3.jpg";
import pimg from "../../../images/prod-2.jpg";
import ProductPhone from "../ProductPhone/ProductPhone";
import axios from "axios";
import PSquare from "../PSquare/PSquare";
export default function Product2() {
  const [dd, setDd] = useState(true);
  const [dd1, setDd1] = useState(false);
  const [dd2, setDd2] = useState(false);

  const [prod, setProd] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [selectedComponents, setSelectedComponents] = useState([]);

  const handleComponentClick = (index) => {
    const isSelected = selectedComponents.includes(index);
    if (isSelected) {
      setSelectedComponents((prevSelected) =>
        prevSelected.filter((item) => item !== index)
      );
    } else {
      setSelectedComponents((prevSelected) => [...prevSelected, index]);
    }
  };

  const ImgURL = "http://localhost:1337";
  useEffect(() => {
    const baseURL = "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchProduct = async () => {
      const res = await axios.get(`${baseURL}aldrop-door-kits?populate=*`, {
        headers: headers,
      });
      console.log(res.data.data);
      setProd(res.data?.data[0]?.attributes);
    };
    const fetchFilterProducts = async () => {
      const res = await axios.get(
        `${baseURL}aldrop-door-kits?populate[aldrop_product_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(
      //   res.data?.data[0]?.attributes?.aldrop_product_categories?.data
      // );
      const fetchedCategories = res.data?.data[0]?.attributes?.aldrop_product_categories?.data;
      // setCategory(res.data?.data[0]?.attributes?.aldrop_product_categories?.data);
      setCategory(fetchedCategories);
      setFilteredCategories(fetchedCategories);
    };
    fetchProduct();
    fetchFilterProducts();
  }, []);

  useEffect(() => {

    if(selectedComponents.length >0){
       const filtered = Array.isArray(category) && category.filter((item)=>{
          const categoryValues = item?.attributes?.Category || [];
 
          return selectedComponents.some(comp=>categoryValues.includes(comp));
       });
       setFilteredCategories(filtered);
    }
     else{
       setFilteredCategories(category);
     }
     
   }, [selectedComponents, category]);
  const section = [
    {
      img: [1, 2, 3, 4, 5, 6, 7],
      title: "By Application",
    },
    {
      img: [1, 2, 3],
      title: "By Type",
    },
  ];

  const app = ["Luxurious", "Pocket Friendly", "Super Friendly"];
  const style = [
    "Classic (All time fav)",
    "Mordern & Minimalist",
    "Bold",
    "Traditional",
  ];
  const material = ["Brass", "Zinc", "Aluminium", "Stainless Steel"];

  const img3 = ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"];
  const des1 =
    "Enhance your doors with our premium Aldrop door kits, meticulously designed for strength and elegance. Crafted from the finest materials, our aldrops provide a secure fit for your doors, complementing both traditional and contemporary decor. ";
  const des2 =
    "Each kit is a testament to superior craftsmanship, providing effortless installation and enduring performance. Discover the perfect match for your home or office, and elevate the functionality and aesthetic of your entrance with our distinguished collection.";

  return (
    <>
      <Header />
      <div className="main-product1">
        <div className="product1-banner">
          <PBannerCard
            prod={prod?.Information}
            src={prod?.Image?.data?.attributes?.url}
            //   title="Aldrop Door Kits" img={pimg} des1={des1} des2={des2}
          />
        </div>

        {/* sections */}

        <div
          className="product1-section1-title"
          style={{
            textAlign: "left",
            width: "100%",
            padding: "0 8rem",
          }}
        >
          By Application
        </div>

        <div className="product1-section1">
          <div
            className="product1-section1-info"
            style={{ fontSize: "1.5rem" }}
          >
            Info here
          </div>
          <div className="product1-section1-img-wrapper">
            {Array.isArray(prod?.By_Application?.data) &&
              prod?.By_Application?.data?.map((val, i) => {
                return (
                  <div className="product1-section1-img-wrapper-w">
                    <img src={`${ImgURL}${val?.attributes?.url}`} alt="" />
                    <p>Title</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className="product1-section1-title"
          style={{
            textAlign: "left",
            width: "100%",
            padding: "0 8rem",
          }}
        >
          By Type
        </div>

        <div className="product1-section1">
          <div
            className="product1-section1-info"
            style={{ fontSize: "1.5rem" }}
          >
            Info here
          </div>
          <div className="product1-section1-img-wrapper">
            {Array.isArray(prod?.By_Type?.data) &&
              prod?.By_Type?.data?.map((val, i) => {
                return (
                  <div className="product1-section1-img-wrapper-w">
                    <img src={`${ImgURL}${val?.attributes?.url}`} alt="" />
                    <p>Title</p>
                  </div>
                );
              })}
          </div>
        </div>
        {/* {
               section.map((val,i)=>{
                  return(
                     <div className="product1-section1">
                       <div className="product1-section1-title">{section[i].title}</div>
                       <div className="product1-section1-img-wrapper">
                          {section[i].img.map((val,i)=>{
                             return(
                              <img src={img1} alt="" />
                             )
                          })}
                       </div>
                    </div>
                  )
               })
            } */}

<div
          className="product1-section3"
          style={window.innerWidth <= 500 ? { display: "none" } : {}}
        >
          <div className="product1-section3-left">
            <div className="p-afford">
              <div className="p-afford-main">
                <div className="p-afford-title">Affordability</div>
                <span
                  onClick={() => {
                    setDd(!dd);
                  }}
                >
                  <AiOutlineDown />
                </span>
              </div>
              <div
                className="p-afford-dropDown"
                style={
                  dd
                    ? { height: `calc(${app.length} * 4rem - 1rem)` }
                    : { height: "0" }
                }
              >
                {app.map((val, i) => {
                  return (
                    <div
                      className="p-afford-dd-wrapper"
                      style={!dd ? { display: "none" } : {}}
                    >
                      <span
                        onClick={() => {
                          handleComponentClick(app[i]);
                        }}
                      >
                        <PSquare
                          st={
                            selectedComponents.includes(app[i]) ? true : false
                          }
                        />
                      </span>
                      <div className="p-afford-dd-title">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-afford">
              <div className="p-afford-main">
                <div className="p-afford-title">Style</div>
                <span
                  onClick={() => {
                    setDd1(!dd1);
                  }}
                >
                  <AiOutlineDown />
                </span>
              </div>
              <div
                className="p-afford-dropDown"
                style={
                  dd1
                    ? { height: `calc(${style.length} * 4rem - 1rem)` }
                    : { height: "0" }
                }
              >
                {style.map((val, i) => {
                  return (
                    <div
                      className="p-afford-dd-wrapper"
                      style={!dd1 ? { display: "none" } : {}}
                    >
                      <span
                        onClick={() => {
                          handleComponentClick(style[i]);
                        }}
                      >
                        <PSquare
                          st={
                            selectedComponents.includes(style[i]) ? true : false
                          }
                        />
                      </span>
                      <div className="p-afford-dd-title">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-afford">
              <div className="p-afford-main">
                <div className="p-afford-title">Material</div>
                <span
                  onClick={() => {
                    setDd2(!dd2);
                  }}
                >
                  <AiOutlineDown />
                </span>
              </div>
              <div
                className="p-afford-dropDown"
                style={
                  dd2
                    ? { height: `calc(${material.length} * 4rem - 1rem)` }
                    : { height: "0" }
                }
              >
                {material.map((val, i) => {
                  return (
                    <div
                      className="p-afford-dd-wrapper"
                      style={!dd2 ? { display: "none" } : {}}
                    >
                      {/* <span onClick={() =>{ handleClickM(i);setMat(val);console.log(val)}}>
                                       <PSquare st={isClickedM(i) ? true : false} />
                                       </span> */}
                      <span
                        onClick={() => {
                          handleComponentClick(material[i]);
                        }}
                      >
                        <PSquare
                          st={
                            selectedComponents.includes(material[i]) ? true : false
                          }
                        />
                      </span>
                      <div className="p-afford-dd-title">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="product1-section3-right">
            {/* {img3.map((val)=>{
                         return(
                              <img src={img1} alt=""/>
                         )
                     })} */}
            {Array.isArray(filteredCategories) &&
              filteredCategories?.map((val, i) => {
                return (
                  <img
                    src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                    alt=""
                  />
                );
              })}
          </div>
        </div>

        <div
          className="product1-mob-section3"
          style={window.innerWidth > 500 ? { display: "none" } : {}}
        >
          <ProductPhone imgArr={img3} img={img1} />
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
