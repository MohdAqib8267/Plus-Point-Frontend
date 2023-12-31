import React from "react";
export default function PSquare(props) {
  return (
    <div
      className=".main-PSquare"
      style={{
        width: "1.2rem",
        height: "1.2rem",
        border: "1.2px solid #797979",
      }}
    >
      <p
        style={
          props.st
            ? {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8rem",
                color: "blue",
                fontWeight: "700",
              }
            : { display: "none" }
        }
      >
        &#10003;
      </p>
    </div>
  );
}