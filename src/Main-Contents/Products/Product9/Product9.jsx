import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Product9.css";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import img1 from "../../../images/prod-3.jpg";
import axios from "axios";
export default function Product9() {
  const section1 = [
    {
      img: [1, 2],
      title: "Designs",
    },
    {
      img: [1],
      title: "Gate Hooks",
    },
    {
      img: [1, 2],
      title: "Body Datch",
    },
  ];
  const section2 = [
    {
      img: [1, 2],
      title: "Door Knocker",
    },
    {
      img: [1, 2, 3, 4],
      title: "Door Stoper",
    },
    {
      img: [1, 2],
      title: "Door Chain",
    },
  ];

  const [prod, setProd] = useState(" ");
  const [productDesign, SetProductsDesign] = useState([]);
  const [gateHooks, SetGateHooks] = useState([]);
  const [bodyDatch, SetBodyDatch] = useState([]);
  const [coatHooks, setCoatHooks] = useState([]);
  const [knock, setKnock] = useState([]);
  const [stopper, setStopper] = useState([]);
  const [chain, setChain] = useState([]);

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
      const res = await axios.get(`${baseURL}door-accessories?populate=*`, {
        headers: headers,
      });
      console.log(res.data.data);
      setProd(res.data?.data[0].attributes);
    };
    const fetchProductsDesign = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[door_accessories_designs][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      SetProductsDesign(
        res.data?.data[0].attributes?.door_accessories_designs?.data
      );
    };
    const fetchGateHooks = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[door_gate_hooks][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      SetGateHooks(res.data?.data[0].attributes?.door_gate_hooks?.data);
    };
    const fetchBodyDatch = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[body_datches][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      SetBodyDatch(res.data?.data[0].attributes?.body_datches?.data);
    };
    const fetchCoatHooks = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[coat_hooks][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setCoatHooks(res.data?.data[0].attributes?.coat_hooks?.data);
    };
    const fetchDoorKnock = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[door_knockers][populate]=*`,
        {
          headers: headers,
        }
      );
      // console.log(res.data.data);
      setKnock(res.data?.data[0].attributes?.door_knockers?.data);
    };
    const fetchDoorStopper = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[door_stoppers][populate]=*`,
        {
          headers: headers,
        }
      );
      console.log(res.data.data);
      setStopper(res.data?.data[0].attributes?.door_stoppers?.data);
    };
    const fetchDoorChain = async () => {
      const res = await axios.get(
        `${baseURL}door-accessories?populate[door_chains][populate]=*`,
        {
          headers: headers,
        }
      );
      console.log(res.data.data);
      setChain(res.data?.data[0].attributes?.door_chains?.data);
    };

    fetchProducts();
    fetchProductsDesign();
    fetchGateHooks();
    fetchBodyDatch();
    fetchCoatHooks();
    fetchDoorKnock();
    fetchDoorStopper();
    fetchDoorChain();
  }, []);

  const img3 = [1, 2, 3];
  const img4 = [1, 2, 3, 4];

  return (
    <>
      <Header />
      <div className="main-product9">
        <div className="product4-topbanner">
          <div className="product4-title">{prod?.Title}</div>
        </div>

        <div className="product9-section1">
          <div className="product4-section1">
            <div className="product4-section1-title">Design</div>
            <div className="product4-section1-wrapper">
              {Array.isArray(productDesign) &&
                productDesign?.map((val) => {
                  return (
                    <div
                      className="product4-section1-img"
                      style={{ width: "calc(50% - 30px)", height: "30rem" }}
                    >
                      {/* <img src={img1} alt="" style={{height:"80%"}} /> */}
                      <img
                        src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                        style={{ height: "80%" }}
                        alt=""
                      />
                      <div className="product4-section1-img-title">
                        {val?.attributes?.Title}
                      </div>
                      <div className="product4-colors">
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color1 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color1 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color1 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color1 }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Gate Hooks */}
        <div className="product9-section1">
          <div className="product4-section1">
            <div className="product4-section1-title">Gate Hooks</div>
            <div className="product4-section1-wrapper">
              {Array.isArray(gateHooks) &&
                gateHooks?.map((val) => {
                  return (
                    <div
                      className="product4-section1-img"
                      style={{ width: "calc(50% - 30px)", height: "30rem" }}
                    >
                      {/* <img src={img1} alt="" style={{height:"80%"}} /> */}
                      <img
                        src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                        style={{ height: "80%" }}
                        alt=""
                      />
                      <div className="product4-section1-img-title">
                        {val?.attributes?.Title}
                      </div>
                      <div className="product4-colors">
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color1 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color2 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color3 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color4 }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Body Datch */}
        <div className="product9-section1">
          <div className="product4-section1">
            <div className="product4-section1-title">Body Datch</div>
            <div className="product4-section1-wrapper">
              {Array.isArray(bodyDatch) &&
                bodyDatch?.map((val) => {
                  return (
                    <div
                      className="product4-section1-img"
                      style={{ width: "calc(50% - 30px)", height: "30rem" }}
                    >
                      {/* <img src={img1} alt="" style={{height:"80%"}} /> */}
                      <img
                        src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                        style={{ height: "80%" }}
                        alt=""
                      />
                      <div className="product4-section1-img-title">
                        {val?.attributes?.Title}
                      </div>
                      <div className="product4-colors">
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color1 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color2 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color3 }}
                        ></div>
                        <div
                          className="product4-color"
                          style={{ background: val?.attributes?.Color4 }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* sections */}
        {/* { 
                section1.map((val,i)=>{
                  return(
                    <div className="product9-section1">
                    <div className="product4-section1">
                    <div className="product4-section1-title">{section1[i].title}</div>
                    <div className="product4-section1-wrapper">
                         {section1[i].img.map((val)=>{
                            return(
                            <div className="product4-section1-img" style={{width:"calc(50% - 30px)",height:"30rem"}}>
                             <img src={img1} alt="" style={{height:"80%"}} />
                             <div className="product4-section1-img-title">Lorem ipsum dolor sit</div>
                             <div className="product4-colors">
                                 <div className="product4-color" style={{background:"#F9A964"}}></div>
                                 <div className="product4-color" style={{background:"#B76E2E"}}></div>
                                 <div className="product4-color" style={{background:"#000"}}></div>
                                 <div className="product4-color" style={{background:"#D9D9D9"}}></div>
                             </div>
                        </div>
                         )
                       })}
                      </div>
                    </div>
                  </div>
                  )
                })
              } */}

        {/* Coat Hooks */}
        <div className="product9-section4">
  <div className="product9-section4-wrapper">
    <div className="product9-section4-title">Coat Hooks</div>
    {Array.isArray(coatHooks) &&
      coatHooks?.map((val, i) => (
        <div
          key={i}
          className="product9-section4-wrap"
          style={{ marginBottom: "-1rem", marginTop: "2rem" }}
        >
          <div className="product9-section4-wrap-left">{val?.attributes?.Title}</div>
          <div className="product9-section4-wrap-right">
            {val?.attributes?.Images?.data?.map((item, index) => (
              <img
                key={index}
                src={`${ImgURL}${item?.attributes?.url}`}
                alt=""
              />
            ))}
          </div>
        </div>
      ))}
  </div>
</div>


        {/* section4 */}
        {/* <div className="product9-section4">
          <div className="product9-section4-wrapper">
            <div className="product9-section4-title">Coat Hooks</div>
            <div
              className="product9-section4-wrap"
              style={{ marginBottom: "-1rem", marginTop: "2rem" }}
            >
              <div className="product9-section4-wrap-left">Zinc</div>
              <div className="product9-section4-wrap-right">
                {img3.map((val) => {
                  return <img src={img1} alt="" />;
                })}
              </div>
            </div>
            <div className="product9-section4-wrap">
              <div
                className="product9-section4-wrap-left"
                style={{ marginTop: "30px" }}
              >
                Steel
              </div>
              <div className="product9-section4-wrap-right">
                {img4.map((val) => {
                  return (
                    <img src={img1} alt="" style={{ marginTop: "30px" }} />
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}

        {/* Door Knockers */}
        <div className="product9-section1">
              <div className="product4-section1">
                <div className="product4-section1-title">
                  Door Knocker
                </div>
                <div className="product4-section1-wrapper">
                  {Array.isArray(knock) && knock.map((val) => {
                    return (
                      <div
                        className="product4-section1-img"
                        style={{ width: "calc(50% - 30px)", height: "30rem" }}
                      >
                        {/* <img src={img1} alt="" style={{ height: "80%" }} /> */}
                        <img
                        src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                        style={{ height: "80%" }}
                        alt=""
                      />
                        <div className="product4-section1-img-title">
                          {val?.attributes?.Title}
                        </div>
                        <div className="product4-colors">
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color1 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background:val?.attributes?.Color2 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color3 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color4 }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
        {/* Door Stopper */}
        <div className="product9-section1">
              <div className="product4-section1">
                <div className="product4-section1-title">
                  Door Stopper
                </div>
                <div className="product4-section1-wrapper">
                  {Array.isArray(stopper) && stopper.map((val) => {
                    return (
                      <div
                        className="product4-section1-img"
                        style={{ width: "calc(50% - 30px)", height: "30rem" }}
                      >
                        {/* <img src={img1} alt="" style={{ height: "80%" }} /> */}
                        <img
                        src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                        style={{ height: "80%" }}
                        alt=""
                      />
                        <div className="product4-section1-img-title">
                          {val?.attributes?.Title}
                        </div>
                        <div className="product4-colors">
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color1 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background:val?.attributes?.Color2 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color3 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color4 }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
        {/* Door Chain */}
        <div className="product9-section1">
              <div className="product4-section1">
                <div className="product4-section1-title">
                  Door Chain
                </div>
                <div className="product4-section1-wrapper">
                  {Array.isArray(chain) && chain.map((val) => {
                    return (
                      <div
                        className="product4-section1-img"
                        style={{ width: "calc(50% - 30px)", height: "30rem" }}
                      >
                        {/* <img src={img1} alt="" style={{ height: "80%" }} /> */}
                        <img
                        src={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                        style={{ height: "80%" }}
                        alt=""
                      />
                        <div className="product4-section1-img-title">
                          {val?.attributes?.Title}
                        </div>
                        <div className="product4-colors">
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color1 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background:val?.attributes?.Color2 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color3 }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: val?.attributes?.Color4 }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>


        {/* sections'*/}
        {/* {section2.map((val, i) => {
          return (
            <div className="product9-section1">
              <div className="product4-section1">
                <div className="product4-section1-title">
                  {section2[i].title}
                </div>
                <div className="product4-section1-wrapper">
                  {section2[i].img.map((val) => {
                    return (
                      <div
                        className="product4-section1-img"
                        style={{ width: "calc(50% - 30px)", height: "30rem" }}
                      >
                        <img src={img1} alt="" style={{ height: "80%" }} />
                        <div className="product4-section1-img-title">
                          Lorem ipsum dolor sit
                        </div>
                        <div className="product4-colors">
                          <div
                            className="product4-color"
                            style={{ background: "#F9A964" }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: "#B76E2E" }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: "#000" }}
                          ></div>
                          <div
                            className="product4-color"
                            style={{ background: "#D9D9D9" }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
