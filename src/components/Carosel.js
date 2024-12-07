import React, { useState } from "react";
import laptop from '../Assets/laptop.jpg'
import cloths from '../Assets/cloths.jpg'
import mobile from '../Assets/mobile.jpg'
const Carousel = () => {
  const slides = [
    { id: 1, url: laptop },
    { id: 2, url: mobile },
    { id: 3, url: cloths },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Image */}
      <div className="w-full h-64 md:h-80 bg-gray-200 overflow-hidden rounded-lg">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
