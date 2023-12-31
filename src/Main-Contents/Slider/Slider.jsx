import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Slider.css";
import s1 from "../../images/1942 (1).png";
import s2 from "../../images/1983.png";
import s3 from "../../images/1996.png";
import s4 from "../../images/2009.png";
import s5 from "../../images/2015(1).png";
import s6 from "../../images/2015(2).png";
import s7 from "../../images/2016.png";
import s8 from "../../images/2023.png";
import TimelineObserver from "react-timeline-animation";
// import TimelineH from "../TimelineH/TimelineH";

gsap.registerPlugin(ScrollTrigger);

export default function Slider({timeLineData}) {
  console.log(timeLineData);
  const [width, setWidth] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(true);
  const intermediaryBalls = 5;
  const calculatedWidth = (width / (intermediaryBalls + 1)) * 100;

  const component = useRef();
  const slider = useRef();
  const ImgURL="http://localhost:1337"

  const sliderData = [
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          1942
          <br />
          Building a Legacy:
        </div>
      ),
      info: (
        <div>
          In a small workshop,{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            our extraordinary journey began.
          </span>{" "}
          Fueled by the passion and dedication of two brothers, we crafted{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            locks and hardware,
          </span>{" "}
          laying the foundation of our extraordinary legacy.
        </div>
      ),

      img: s1,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          1983
          <br />
          New Begining:
        </div>
      ),
      info: (
        <div>
          Driven by a burning desire for change,{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            Mr. Rajiv Agarwal
          </span>{" "}
          joined the family business. With a visionary spirit, he embarked on a
          courageous journey,
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            {" "}
            redefining excellence in the locks,{" "}
          </span>
          and hardware industry.
        </div>
      ),
      img: s2,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          1996 <br />
          Revolutionary
          <br />
          Product Launch:
        </div>
      ),
      info: (
        <div>
          Years of hard work paid off as we unveiled the iconic,{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            Aldrop 401.
          </span>{" "}
          This product, with its
          <span
            style={{ color: "#1F1F1F", fontWeight: "600", marginLeft: "3px" }}
          >
            impeccable design and flawless functionality,
          </span>{" "}
          catapulted Plus Point into the limelight.
        </div>
      ),

      img: s3,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          2009
          <br />- Corporate Milestone:
        </div>
      ),
      info: (
        <div>
          We reached{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            a significant milestone in 2009
          </span>{" "}
          by incorporating
          <span
            style={{ color: "#1F1F1F", fontWeight: "600", marginLeft: "3px" }}
          >
            as a Pvt. Ltd.
          </span>{" "}
          This transformation solidified our position as a leading player,
          showcasing our commitment to professionalism, integrity, and long-term
          success.
        </div>
      ),

      img: s4,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          2015
          <br />
          Continuing the Legacy:
        </div>
      ),
      info: (
        <div>
          A new chapter began as{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            Mr. Niket Agarwal
          </span>{" "}
          joined our family business with a burning desire to establish a{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            recognized Indian brand.
          </span>{" "}
          With fresh perspective and unwavering determination, Niket embarked on
          a mission to redefine elegance in the industry.
        </div>
      ),

      img: s5,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          2015
          <br />
          Continuing the Legacy:
        </div>
      ),
      info: (
        <div>
          Our exquisite{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            Luxurious Collection
          </span>{" "}
          showcased our commitment{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            {" "}
            crafted in forged brass,
          </span>{" "}
          each product exuded opulence and sophistication, becoming synonymous
          with unparalleled quality and style.
        </div>
      ),

      img: s6,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          2016
          <br />
          Mark on the Global Stage:
        </div>
      ),
      info: (
        <div>
          We made a{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            grand debut at the prestigious Hardware Koelnmesse in Cologne,
          </span>{" "}
          Germany, leaving our mark on the world stage.
        </div>
      ),

      img: s7,
    },
    {
      heading: (
        <div className="s-y" style={{ color: "#4C341F", fontSize: "3rem" }}>
          2023
          <br />
          Stainless Steel Excellence:
        </div>
      ),
      info: (
        <div>
          A new era dawns as we prepare to unveil our innovative collection that
          redefines style and security.{" "}
          <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
            Witness the artistry of stainless steel, symbolizing strength and
            durability,
          </span>{" "}
          as it elevates our creations to new heights. Experience Stainless
          Steel Excellence firsthand.
        </div>
      ),
      img: s8,
    },
  ];
 
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: slider.current,
          end: "bottom",
          pin: true,
          scrub: 0.1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          // markers: true,
        },
      });
    }, component);
    return () => ctx.revert();  
  }, []);

  const onCallback = () => {
    console.log("awesome");
  };

  
  return (
    <div className="Slider m-w-c" ref={component}>
      <div ref={slider} className="container-slide">
        { Array.isArray(sliderData) && sliderData?.map((data, index) => {   
          return (
            <div className="opq">
              <div className="slide1 panel" key={index}>
                <div className="ijk">
                  <div className="s-left">
                    <h1
                      className="s-y"
                      style={{ color: "#4C341F", fontSize: "3rem" }}
                    >
                      {data.heading}
                    </h1>
                    <span style={{ textAlign: "justify" }}>{data.info}</span>
                    {/* <div dangerouslySetInnerHTML={{ __html: data?.attributes?.Year_Information}} /> */}
                  </div>
                  <div className="s-right">
                    <div className="s-img">
                      <img width="100%" src={data.img} alt="" />
                      {/* <img width="100%" src={`${ImgURL}${data?.attributes?.Image?.data?.attributes?.url}`} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="timeline2 " >
                  <div className="timeline_progress"></div>
                  <ul class="years">

                    <li data-position="2" class="year year--highlight">
                      <span class="year__value">
                      {/* <div dangerouslySetInnerHTML={{ __html: data?.attributes?.Year}} /> */}
                        {parseInt(data.heading.props.children[0].trim(), 10)}
                      </span> 
                    </li>
                  </ul>   
                </div>
              </div>
            </div>
          );
        })}
        {/* {sliderData.map((data, index) => {
          return (
            <div className="opq">
              <div className="slide1 panel" key={index}>
                <div className="ijk">
                  <div className="s-left">
                    <h1
                      className="s-y"
                      style={{ color: "#4C341F", fontSize: "3rem" }}
                    >
                      {data.heading}
                    </h1>
                    <span style={{ textAlign: "justify" }}>{data.info}</span>
                  </div>
                  <div className="s-right">
                    <div className="s-img">
                      <img width="100%" src={data.img} alt="" />
                    </div>
                  </div>
                </div>
                <div className="timeline2 " >
                  <div className="timeline_progress"></div>
                  <ul class="years">

                    <li data-position="2" class="year year--highlight">
                      <span class="year__value">
                        
                        {parseInt(data.heading.props.children[0].trim(), 10)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })} */}
         
      </div>
     
    </div>
  );
}
