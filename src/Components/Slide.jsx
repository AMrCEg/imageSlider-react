import React from "react";

const Slide = (props) => {
  return (
    <div className="slider-container">
      <div id="slider-number" className="slider-number">
        Slide #{props.currentImage} of {props.imageCount}
      </div>
      <img
        className="active"
        src={`/imgs/Horses/${props.currentImage < 10 ? "0" : ""}${
          props.currentImage
        }.jpg`}
        alt=""
      />
    </div>
  );
};

export default Slide;
