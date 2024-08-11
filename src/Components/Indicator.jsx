import React from "react";

const Indicator = (props) => {
  return (
    <li
      className={props.currentImage == props.index ? "active" : ""}
      onClick={() => props.handleIndicator(props.index)}
    >
      {props.index}
    </li>
  );
};

export default Indicator;
