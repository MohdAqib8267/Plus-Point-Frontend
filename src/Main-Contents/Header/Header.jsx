import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../images/PlusPointLogo.png";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
export default function Header(props) {
  const navigate = useNavigate("/");

  useEffect(
    () => {
      if (window.innerWidth <= 480) setPh(true);
    },
    window.addEventListener("scroll", () => {
      if (props.newHead === undefined) {
        if (
          window.innerWidth > 1000 &&
          window.pageYOffset > 10 &&
          window.pageYOffset < 2000
        )
          setShowHead(false);
        else if (
          window.innerWidth <= 1000 &&
          window.pageYOffset > 10 &&
          window.pageYOffset < 600
        ) {
          setShowHead(false);
          setPh(false);
        } else {
          setShowHead(true);
        }
      } else {
        if (
          window.innerWidth > 1000 &&
          window.pageYOffset > 10 &&
          window.pageYOffset < props.height
        )
          setShowHead(false);
        else if (
          window.innerWidth <= 1000 &&
          window.pageYOffset > 10 &&
          window.pageYOffset < 600
        ) {
          setShowHead(false);
          setPh(false);
        } else {
          setShowHead(true);
        }
      }
    })
  );

  const [showHead, setShowHead] = useState(true);
  const [ph, setPh] = useState(false);
  const [showUl, setShowUl] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showHamMenu, setShowHamMenu] = useState(false);
  const [showHamAbout, setShowHamAbout] = useState(false);
  const [showHamMedia, setShowHamMedia] = useState(false);
  const [showHamProducts, setShowHamProducts] = useState(false);

  const show = () => {
    setShowHamMenu(!showHamMenu);
    setShowUl(true);
  };
  const showAbout = () => {
    setShowHamAbout(!showHamAbout);
  };
  const showMedia = () => {
    setShowHamMedia(!showHamMedia);
  };
  const showProducts = () => {
    setShowHamProducts(!showHamProducts);
  };
  return (
    <>
      <div
        className="m-header"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="main-header"
          id="1"
          style={
            props.newHead != undefined
              ? (showHead && props.newHead) || ph
                ? {}
                : { display: "none" }
              : showHead
              ? {}
              : { display: "none" }
          }
        >
          <div className="left-logo">
            <img src={img} alt="" className="head-img" />
          </div>
          <div className={!showMenu ? "right" : "disp"}>
            <ul>
              <li>
                {" "}
                <a href="/">Home</a>
              </li>
              <li>
                {" "}
                <a>
                  Who we are{" "}
                  <span>
                    {" "}
                    <AiOutlineDown />{" "}
                  </span>
                </a>
                <ul className="drop-down">
                  <li onClick={() => navigate("/about")}>About Us</li>
                  <li onClick={() => navigate("/ourTeam")}>Our Team</li>
                  <li onClick={() => navigate("/ourVision")}>
                    Mission Vission
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="/experties">What we do</a>
              </li>
              <li>
                {" "}
                <a href="/media">Media</a>
                <ul className="drop-down" style={{ display: "none" }}>
                  <li>
                    {" "}
                    <a href="">Media-1</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Media-2</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Media-3</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Media-4</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="/products">
                  Products{" "}
                  <span>
                    {" "}
                    <AiOutlineDown />{" "}
                  </span>
                </a>
                <ul className="drop-down" style={{ display: "none" }}>
                  <li>
                    {" "}
                    <a href="">Products-1</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Products-2</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Products-3</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="/blogs">Blog</a>
              </li>
              <li className="head-contact">
                {" "}
                <a href="/contact" style={{ color: "#fff" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="right-ham-menu">
            <div className="right-ham-menu-img">
              <GiHamburgerMenu className="ham-img" onClick={show} />
            </div>
          </div>
        </div>
        <div
          className={
            showHamMenu ? "right-ham-content" : "right-ham-content disp-ham"
          }
          style={showHead && showUl ? {} : { height: "0" }}
        >
          <ul style={showUl && showHead ? {} : { display: "none" }}>
            <li>
              <span>
                <a href="/">Home</a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">Who we are</a> <AiOutlineDown onClick={showAbout} />
              </span>
              <ul
                style={
                  showHamAbout
                    ? { height: `calc(3 * 3rem)`, gap: "10px" }
                    : { height: "0" }
                }
              >
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/ourTeam">Our Team</a>
                </li>
                <li>
                  <a href="/ourVision">Mission Vision</a>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <a href="/experties">What we do</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/media">Media</a>{" "}
              </span>
              {/* <AiOutlineDown onClick={showMedia}/></span>
                        <ul style={showHamMedia?{height:"15rem",marginTop:"20px"}:{height:"0"}}>
                            <li><a href="">Media-1</a></li>
                            <li><a href="">Media-2</a></li>
                            <li><a href="">Media-3</a></li>
                            <li><a href="">Media-4</a></li>
                        </ul> */}
            </li>
            <li>
              <span>
                <a href="/products">Products</a>{" "}
                <AiOutlineDown onClick={showProducts} />
              </span>
              <ul
                style={
                  showHamProducts
                    ? { height: `calc(3 * 3rem)`, gap: "10px" }
                    : { height: "0" }
                }
              >
                <li>
                  <a href="">Product-1</a>
                </li>
                <li>
                  <a href="">Product-2</a>
                </li>
                <li>
                  <a href="">Product-3</a>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <a href="/blogs">Blogs</a>
              </span>
            </li>
            <li>
              <span>
                <a href="/contact">Contacts</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}