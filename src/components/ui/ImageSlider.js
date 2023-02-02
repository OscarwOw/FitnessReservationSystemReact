import React, { useState } from 'react';
import './ImageSlider.css';
import {CiCircleChevRight, CiCircleChevLeft} from "react-icons/ci";

const ImageSlider = () => {
  const images = [
        { url: 'white.jpg', backgroundColor: 'green' },
        { url: 'black.jpg', backgroundColor: 'black' },
        { url: 'red.jpg', backgroundColor: 'red' },
      ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [rightImage, setRightImage] = useState((currentImage + 1) % images.length);
  const [leftImage, setLeftImage] = useState((currentImage + images.length - 1) % images.length);

  

  return (
    <div className="image-slider">
      <div
        className="image-slider__left-image"
        style={{
          backgroundColor: images[leftImage].backgroundColor,
        }}
      >
        <img src={images[leftImage].url} alt={`${leftImage + 1} image`} />
      </div>
      <div
        className="image-slider__center-image"
        style={{
          backgroundColor: images[currentImage].backgroundColor,
        }}
      >
        <img src={images[currentImage].url} alt={`${currentImage + 1} image`} />
      </div>
      <div
        className="image-slider__right-image"
        style={{
          backgroundColor: images[rightImage].backgroundColor,
        }}
      >
        <img src={images[rightImage].url} alt={`${rightImage + 1} image`} />
      </div>
      <div >
        <div className="leftButton" onClick={() => {
          setCurrentImage((currentImage +images.length-1) % images.length);
          setRightImage((rightImage +images.length-1) % images.length);
          setLeftImage((leftImage +images.length-1) % images.length);
        }}><CiCircleChevLeft size='3em'/></div>
        <div className="rightButton" onClick={() => {
          setCurrentImage((currentImage +1) % images.length);
          setRightImage((rightImage +1) % images.length);
          setLeftImage((leftImage +1 ) % images.length);
        }}><CiCircleChevRight size='3em'/></div>
      </div>
    </div>
  );
};

export default ImageSlider;
