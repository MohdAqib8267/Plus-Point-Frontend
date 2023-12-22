import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import './TmExp.css';
// import { fireConfetti } from "./confetti";


const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");

  const timeline1 = useRef(null);

  const circle1 = useRef(null);

  const someCallback = () => {
    setMessage1("");
    callback();
  };

  useEffect(() => {
    setObserver(timeline1.current);

    // setObserver(circle1.current, someCallback);
  }, []);

  return (
    <div className="wrapper-exp">
      <div id="timeline1-exp" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div
          id="circle1"
          ref={circle1}
          className="circle"
          style={{ background: "white" }}
        >
          
        </div>

        <div className="message">{message1}</div>
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
    <div className="Tm-exp">
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
