import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
// import { fireConfetti } from "./confetti";

import "./TimelineV.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [message7, setMessage7] = useState("");
  const [message8, setMessage8] = useState("");
  

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const timeline7 = useRef(null);
  const timeline8 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);
  const circle7 = useRef(null);
  const circle8 = useRef(null);

  const someCallback = () => {
    setMessage1("1942");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("1983");
  };

  const someCallback3 = () => {
    setMessage3("1996");
    // fireConfetti();
  };
  const someCallback4 = () => {
    setMessage4("2009");
    // fireConfetti();
  };
  const someCallback5 = () => {
    setMessage5("2015");
    // fireConfetti();
  };
  const someCallback6 = () => {
    setMessage6("2015-2016");
    // fireConfetti();
  };
  const someCallback7 = () => {
    setMessage7("2016");
    // fireConfetti();
  };
  const someCallback8 = () => {
    setMessage8("2023");
    // fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);
    setObserver(timeline7.current);
    setObserver(timeline8.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
    setObserver(circle7.current, someCallback7);
    setObserver(circle8.current, someCallback8);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message4}</div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message5}</div>
      </div>
      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message6}</div>
      </div>
      <div id="timeline7" ref={timeline7} className="timeline" />
      <div className="circleWrapper">
        <div id="circle7" ref={circle7} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message7}</div>
      </div>
      <div id="timeline8" ref={timeline8} className="timeline" />
      <div className="circleWrapper">
        <div id="circle8" ref={circle8} className="circle" style={{background: "#B5865E"}}>
          .
        </div>
        <div className="message">{message8}</div>
      </div>
    </div>
  );
};

export default function Time() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="t-m">
     
     <div className="stub1">{message}</div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#4C341F"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          /> 
        )}
      />
      <div className="stub2">{message}</div>   
    </div>
  );
}