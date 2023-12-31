import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Product1.css";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import { AiOutlineDown } from "react-icons/ai";
import PSquare from "../PSquare/PSquare";
import img1 from "../../../images/prod-3.jpg";
import pimg from "../../../images/prod-1.jpg";
import ProductPhone from "../ProductPhone/ProductPhone";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Product1() {
  const [dd, setDd] = useState(true);
  const [dd1, setDd1] = useState(false);
  const [dd2, setDd2] = useState(false);

  const [prod, setProd] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { productName } = useParams();

  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedIndexS, setClickedIndexS] = useState(null);
  const [clickedIndexM, setClickedIndexM] = useState(null);

  const [afford, setAfford] = useState(" ");
  const [styled, setStyled] = useState(" ");
  const [mat, setMat] = useState(" ");

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

  console.log(selectedComponents);


  const app = ["Luxurious", "Pocket Friendly", "Super Friendly"];
  const style = [
    "Classic (All time fav)",
    "Mordern & Minimalist",
    "Bold",
    "Traditional",
  ];
  const material = ["Brass", "Zinc", "Aluminium", "Stainless Steel"];

  //   console.log(productName);
  const ImgURL = "http://localhost:1337";
  useEffect(() => {
    const baseURL = "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchProduct = async () => {
      const res = await axios.get(`${baseURL}mortise-lock-sets?populate=*`, {
        headers: headers,
      });
      console.log(res.data.data);
      setProd(res.data?.data[0]?.attributes);
    };
    const fetchFilterProducts = async () => {
      const res = await axios.get(
        `${baseURL}mortise-lock-sets?populate[mortise_product_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data?.data[0]?.attributes?.mortise_product_categories?.data);

      const fetchedCategories = res.data?.data[0]?.attributes?.mortise_product_categories?.data || [];
      setCategory(fetchedCategories);
      setFilteredCategories(fetchedCategories);
    };

    fetchProduct();
    fetchFilterProducts();
  }, []);

  // console.log(category);
  // console.log(filteredCategories);
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
      img: [1, 2, 3, 4, 5],
      title: "By Application",
    },
    {
      img: [1, 2, 3],
      title: "By Type",
    },
  ];
  const img3 = ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"];
  const des1 =
    "Our mortise lock sets combine security with sophistication, offering a range of options for both commercial and residential applications. Our selection features durable materials and finishes that withstand daily use and enhance your door's aesthetics. ";
  const des2 =
    "Each set is engineered for smooth operation and reliable locking mechanisms, ensuring peace of mind. Explore our collection to find the perfect blend of function and style for your space.";
  return (
    <>
      <Header />
      <div className="main-product1">
        <div className="product1-banner">
          <PBannerCard
            prod={prod?.Information}
            src={prod?.Image?.data?.attributes?.url}
            //   title="Mortise Lock Sets" img={pimg} des1={des1} des2={des2}
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

        {/* section3 */}
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
