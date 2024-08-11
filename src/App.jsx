import { useEffect, useState } from "react";
import "./App.css";

import Slide from "./Components/Slide";
import SliderControls from "./Components/SliderControls";

function App() {
  const [currentImage, setCurrentImage] = useState(
    (localStorage.currentImage &&
      (() => JSON.parse(localStorage.currentImage))) ||
      1
  );

  useEffect(() => {
    localStorage.currentImage = JSON.stringify(currentImage);
  }, [currentImage]);

  const imageCount = 20; // change this number according to number of image you want to display && images put in /public/imgs/Horses with name as  01,02,...,10,...

  const handlePrev = () => {
    if (currentImage > 1) {
      setCurrentImage((oldCurrentImage) => oldCurrentImage - 1);
    }
  };

  const handleNext = () => {
    if (currentImage < imageCount) {
      setCurrentImage((oldCurrentImage) => oldCurrentImage + 1);
    }
  };

  const handleIndicator = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="image-slider">
      <Slide currentImage={currentImage} imageCount={imageCount} />
      <SliderControls
        currentImage={currentImage}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleIndicator={handleIndicator}
        imageCount={imageCount}
      />
      <div className="show">
        <div className="slider-number">
          Image #{currentImage} of {imageCount}
        </div>
        <img
          src={`/imageSlider-react/imgs/Horses/${
            currentImage < 10 ? "0" : ""
          }${currentImage}.jpg`}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
