import React, { useState } from "react";
import Chevron from "../assets/chevron.png";

const Collapse = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  return (
    <div className="collapse-div">
      <div className="collapse-title">
        <div className="collapse-name">{props.name}</div>
        <p className="chevron-container">
          <img
            className={`collapse-chevron ${isVisible ? "reverse-rotate" : ""}`}
            src={Chevron}
            alt=""
            onClick={toggleVisibility}
          />
        </p>
      </div>
      <div
        className={`collapse-content ${
          isVisible ? "collapse-content-visible" : ""
        }`}
      >
        {props.description}
      </div>
    </div>
  );
};

export default Collapse;
