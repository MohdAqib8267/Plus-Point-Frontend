import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Product6.css";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import img1 from "../../../images/prod-3.jpg";
import ProductPhone from "../ProductPhone/ProductPhone";
import { AiOutlineDown } from "react-icons/ai";
import { FaRegSquare } from "react-icons/fa";
import axios from "axios";
import PSquare from "../PSquare/PSquare";
export default function Product6() {
  const img = [1, 2, 3];
  const img2 = [1, 2, 3, 4, 5, 6];
  const img3 = [1, 2, 3, 4, 5];
  const img4 = [1, 2, 3, 4, 5, 6, 7, 8];
  const img5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [dd, setDd] = useState(true);
  const [dd1, setDd1] = useState(false);
  const [dd2, setDd2] = useState(false);

  const [prod, setProd] = useState(" ");
  const [padlock, setPadlock] = useState(" ");
  const [cylindes, setCylindes] = useState(" ");
  const [denlock, setDenlock] = useState(" ");
  const [mortiseLatch, setMortiseLatch] = useState(" ");
  const [mLatchBody, setMLatchBody] = useState(" ");
  const [cy, setCy] = useState(" ");

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
    const baseURL =
      process.env.REACT_APP_API_URL || "http://localhost:1337/api/";
    const token =
      "be70dee855404872b42db9f5550afe676ce5884958a904658fb1e8377071abe9fa038b9431bd4d21fe0b35024762f58082b96f6facb806cbd1038a280ddba9fe52f134786c8aec42e991206ef01f081fa1a309631359f89b5ae7a2d98387e4b3d7dcb07e33a81dc141f7335e5119af17f8dc03ac3fda185a01e6d66b36949152";

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchProducts = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setProd(res.data?.data[0].attributes);
    };
    const fetchPadlock = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[padlock_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setPadlock(res.data?.data[0].attributes?.padlock_categories?.data);
    };
    const fetchCylindes = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[lock_cylindes_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setCylindes(res.data?.data[0].attributes?.lock_cylindes_categories?.data);
    };
    const fetchDenlock = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[denlock_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setDenlock(res.data?.data[0].attributes?.denlock_categories?.data);
    };
    const fetchmortiseLatch = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[denlock_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setMortiseLatch(res.data?.data[0].attributes?.denlock_categories?.data);
    };
    const fetchmLatchBody = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[m_latch_body_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setMLatchBody(res.data?.data[0].attributes?.m_latch_body_categories?.data);
    };
    const fetchCY = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[cy_lock_categories][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setCy(res.data?.data[0].attributes?.cy_lock_categories?.data);
    };
    const fetchFilterProducts = async () => {
      const res = await axios.get(
        `${baseURL}door-lock-and-latches?populate[lock_and_latch_filters][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data?.data[0]?.attributes?.lock_and_latch_filters?.data);

      const fetchedCategories = res.data?.data[0]?.attributes?.lock_and_latch_filters?.data || [];
      setCategory(fetchedCategories);
      setFilteredCategories(fetchedCategories);
    };
    fetchProducts();
    fetchPadlock();
    fetchCylindes();
    fetchDenlock();
    fetchmortiseLatch();
    fetchmLatchBody();
    fetchCY();
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

  //  console.log(filteredCategories);

  const app = ["Luxurious", "Pocket Friendly", "Super Friendly"];
  const style = [
    "Classic (All time fav)",
    "Mordern & Minimalist",
    "Bold",
    "Traditional",
  ];
  const material = ["Brass", "Zinc", "Aluminium", "Stainless Steel"]; 

  return (
    <>
      <Header />
      <div className="main-product6">
        <div className="product6-topbanner">
          <div className="product6-title">{prod?.Title}</div>
        </div>
        <div className="product6-content1">
          {prod?.Padlock_Title?.map((item, ind) => {
            return (
              <>
                {/* <div className="product6-content1-title">
                  {item?.type == "heading" && item?.children?.[0]?.text}
                </div> */}
                {item?.type == "heading" && 
                <div className="product6-content1-title">
                  {item?.children?.[0]?.text}
                </div>
                }
                {item?.type != "heading" &&
                <div className="product6-content1-info">
                  {item?.children?.[0]?.text}
                </div>
                  }
              </>
            );
          })}
        </div>

        {/* content2 */}
        <div className="product6-content2">
          {Array.isArray(img) &&
            img?.map((val) => {
              return (
                <div className="product6-content2-img">
                  <img src={img1} alt="" />

                  <div className="product6-content2-title">lorem ipsum</div>
                </div>
              );
            })}
        </div>

        {/* content3 */}
        <div className="product6-content3">
          <div className="product6-content3-wrapper">
            {/* {img2.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"2rem",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })} */}
            {Array.isArray(padlock) &&
              padlock?.map((val) => {
                return (
                  <div
                    className="product6-content2-img"
                    style={{
                      background: "#ECECEC",
                      marginTop: "2rem",
                      justifyContent: "flex-start",
                      gap: "40px",
                    }}
                  >
                    
                    <img
                      src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className="product6-content2-title">
                      {val?.attributes?.Title}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="product6-content3-btn">See More</div>
        </div>

        {/* content4 */}
        <div className="product6-content4">
          <div className="product6-content1">

            {/* <div className="product6-content1-title">Lock Cylindes</div>
            <div className="product6-content1-info">
              A key component in our Door Locks and Latches lineup, engineered
              for superior lock integrity and seamless functionality.
            </div> */}
            {prod?.Lock_Cylindes_Title?.map((item, ind) => {
            return (
              <>
                {/* <div className="product6-content1-title">
                  {item?.type == "heading" && item?.children?.[0]?.text}
                </div> */}
                {item?.type == "heading" && 
                <div className="product6-content1-title">
                  {item?.children?.[0]?.text}
                </div>
                }
                {item?.type != "heading" &&
                <div className="product6-content1-info">
                  {item?.children?.[0]?.text}
                </div>
                  }
              </>
            );
          })}
          </div>

          <div className="product6-content4-wrapper">
          {Array.isArray(cylindes) &&
              cylindes?.map((val) => {
                return (
                  <div
                    className="product6-content2-img"
                    style={{
                      background: "#ECECEC",
                      marginTop: "2rem",
                      justifyContent: "flex-start",
                      gap: "40px",
                    }}
                  >
                    
                    <img
                      src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className="product6-content2-title">
                      {val?.attributes?.Title}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="product6-content4-style">
            <div className="product6-content4-style-wrapper">
              <div className="product6-content4-style-title">
                Available in 8 exquisite finishes :
              </div>
              <div className="product6-content4-img">

                {prod?.Lock_Cylides_Equisite?.data?.map((val) => {
                  return (

                    <img
                      src={`${ImgURL}${val?.attributes?.url}`}
                      alt=""
                      style={{
                        width: "12%",
                        height: "13rem",
                        objectFit: "cover",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* content5 */}
        <div className="product6-content5">
          <div className="product6-content1">
          {prod?.Denlock_Title?.map((item, ind) => {
            return (
              <>
                {/* <div className="product6-content1-title">
                  {item?.type == "heading" && item?.children?.[0]?.text}
                </div> */}
                {item?.type == "heading" && 
                <div className="product6-content1-title">
                  {item?.children?.[0]?.text}
                </div>
                }
                {item?.type != "heading" &&
                <div className="product6-content1-info">
                  {item?.children?.[0]?.text}
                </div>
                  }
              </>
            );
          })}
           
          </div>

          <div className="product6-content4-wrapper">
          {Array.isArray(denlock) &&
              denlock?.map((val) => {
                return (
                  <div
                    className="product6-content2-img"
                    style={{
                      background: "#ECECEC",
                      marginTop: "2rem",
                      justifyContent: "flex-start",
                      gap: "40px",
                    }}
                  >
                    
                    <img
                      src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className="product6-content2-title">
                      {val?.attributes?.Title}
                    </div>
                  </div>
                );
              })}
            {/* {img.map((val) => {
              return (
                <div
                  className="product6-content2-img "
                  style={{
                    background: "#ECECEC",
                    justifyContent: "flex-start",
                    gap: "40px",
                  }}
                >
                  <img src={img1} alt="" style={{ height: "80%" }} />
                  <div className="product6-content3-title">
                    Door Locks & Latches
                  </div>
                </div>
              );
            })} */}
          </div>
          <div className="product6-line">
            <div className="product6-line-style"></div>
          </div>
        </div>

        {/* content6 */}
        <div className="product6-content6">
          <div className="product6-content1">
          {prod?.Mortise_Latch_Title?.map((item, ind) => {
            return (
              <>
                {/* <div className="product6-content1-title">
                  {item?.type == "heading" && item?.children?.[0]?.text}
                </div> */}
                {item?.type == "heading" && 
                <div className="product6-content1-title">
                  {item?.children?.[0]?.text}
                </div>
                }
                {item?.type != "heading" &&
                <div className="product6-content1-info">
                  {item?.children?.[0]?.text}
                </div>
                  }
              </>
            );
          })}
            {/* <div className="product6-content1-title">Mortise Latch</div>
            <div className="product6-content1-info">
              Explore the precision of our Mortise Latch, a subtle yet powerful
              component in door functionality. Crafted for discrete integration,
              it offers a smooth, reliable latching mechanism that quietly
              underpins the security of your doorway
            </div> */}
          </div>

          <div className="product6-content4-wrapper">
          {Array.isArray(mortiseLatch) &&
              mortiseLatch?.map((val) => {
                return (
                  <div
                    className="product6-content2-img"
                    style={{
                      background: "#ECECEC",
                      marginTop: "2rem",
                      justifyContent: "flex-start",
                      gap: "40px",
                    }}
                  >
                    
                    <img
                      src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className="product6-content2-title">
                      {val?.attributes?.Title}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="product6-line">
            <div className="product6-line-style"></div>
          </div>
        </div>

        {/* content7 */}
        <div className="product6-content7">
          <PBannerCard prod={prod?.Mortise_Body_Latch_Information} src={prod?.Mortise_Body_Latch_Image?.data?.attributes?.url}/>
          <div className="product6-content4-wrapper" style={{ padding: "0" }}>
          {Array.isArray(mLatchBody) &&
              mLatchBody?.map((val) => {
                return (
                  <div
                    className="product6-content2-img"
                    style={{
                      background: "#ECECEC",
                      marginTop: "2rem",
                      justifyContent: "flex-start",
                      gap: "40px",
                    }}
                  >
                    
                    <img
                      src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className="product6-content2-title">
                      {val?.attributes?.Title}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* content8 */}
        <div className="product6-content4">
          <div className="product6-content1">
            {/* <div className="product6-content1-title">Lock Cylindes</div>
            <div className="product6-content1-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </div> */}
            {prod?.CY_Lock_Body_Information?.map((item, ind) => {
            return (
              <>
                {/* <div className="product6-content1-title">
                  {item?.type == "heading" && item?.children?.[0]?.text}
                </div> */}
                {item?.type == "heading" && 
                <div className="product6-content1-title">
                  {item?.children?.[0]?.text}
                </div>
                }
                {item?.type != "heading" &&
                <div className="product6-content1-info">
                  {item?.children?.[0]?.text}
                </div>
                  }
              </>
            );
          })}
          </div>

          <div className="product6-content4-wrapper">
          {Array.isArray(cy) &&
              cy?.map((val) => {
                return (
                  <div
                    className="product6-content2-img"
                    style={{
                      background: "#ECECEC",
                      marginTop: "2rem",
                      justifyContent: "flex-start",
                      gap: "40px",
                    }}
                  >
                    
                    <img
                      src={`${ImgURL}${val?.attributes.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                    <div className="product6-content2-title">
                      {val?.attributes?.Title}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="product6-content4-style">
            <div className="product6-content4-style-wrapper">
              <div className="product6-content4-style-title">
                Available in 8 exquisite finishes :
              </div>
              <div className="product6-content4-img">
              {prod?.CY_Equisite?.data?.map((val) => {
                  return (

                    <img
                      src={`${ImgURL}${val?.attributes?.url}`}
                      alt=""
                      style={{
                        width: "12%",
                        height: "13rem",
                        objectFit: "cover",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* content9 */}
        <div className="product6-content9">
          <PBannerCard prod={prod?.Main_Door_Locks_Informaton} src={prod?.Main_Door_Locks_Image?.data?.attributes?.url} />
        </div>

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
          <ProductPhone imgArr={img5} img={img1} />
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
