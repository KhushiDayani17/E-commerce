import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <SlickSlider {...settings} className="rounded-lg overflow-hidden">
      <div>
        <img
          src="./static/images/slider1.jpg"
          alt="Slider Image 1"
          className="w-full"
        />
      </div>
      <div>
        <img
          src="./static/images/slider2.webp"
          alt="Slider Image 2"
          className="w-full"
        />
      </div>
      <div>
        <img
          src="./static/images/slider3.webp"
          alt="Slider Image 3"
          className="w-full"
        />
      </div>
    </SlickSlider>
  );
};

export default Slider;
