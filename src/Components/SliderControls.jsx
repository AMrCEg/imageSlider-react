import React from "react";

import Indicator from "./Indicator";

const SliderControls = (props) => {
  const indicators = [];
  for (let index = 1; index <= props.imageCount; index++) {
    indicators.push(
      <Indicator
        key={index} // Always use a key when rendering lists
        index={index}
        currentImage={props.currentImage}
        handleIndicator={props.handleIndicator}
      />
    );
  }

  return (
    <div className="slider-controls">
      <span
        id="prev"
        className={`prev ${props.currentImage == 1 ? "disabled" : ""}`}
        onClick={props.handlePrev}
      >
        Previous
      </span>
      <span id="indicators" className="indicators">
        <ul>{indicators.map((indicator) => indicator)}</ul>
      </span>
      <span
        id="next"
        className={`next ${
          props.currentImage == props.imageCount ? "disabled" : ""
        }`}
        onClick={props.handleNext}
      >
        Next
      </span>
    </div>
  );
};

export default SliderControls;
