import React, { useState } from "react";
import classNames from "classnames";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
];

const gifs = [
  "gif1.gif",
  "gif2.gif",
  "gif3.gif",
  "gif4.gif",
  "gif5.gif",
  "gif6.gif",
  "gif7.gif",
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <button
        onClick={goToPreviousImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl p-2 bg-gray-500 text-white"
      >
        {"<"}
      </button>
      <button
        onClick={goToNextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl p-2 bg-gray-500 text-white"
      >
        {">"}
      </button>
      <div className="h-80 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={classNames("h-80 w-full transition-transform duration-300", {
              "transform translate-x-0": index === currentImageIndex,
              "transform translate-x-full": index < currentImageIndex,
              "transform -translate-x-full": index > currentImageIndex,
            })}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-2">
        <img
          src={gifs[currentImageIndex]}
          alt={`Gif ${currentImageIndex + 1}`}
          className="w-20 h-20 mx-auto"
        />
      </div>
    </div>
  );
};

export default Carousel;