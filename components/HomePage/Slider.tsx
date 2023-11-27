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
    autoplay: false,
    autoplaySpeed: 1000,
  };

  const slidesData = [
    {
      image: "./static/images/slider1.jpg",
      title: "Night Summer Dresses",
      description: "Shop Now",
      buttonLabel: "Summer '19",
    },
    {
      image: "./static/images/slider2.webp",
      title: "New Cocktail Dresses",
      description: "Shop Now",
      buttonLabel: "50% OFF",
    },
    {
      image: "./static/images/slider3.webp",
      title: "The Weekent Getaway",
      description: "Browse styles",
      buttonLabel: "Spring/Summer '19",
    },
  ];

  return (
    <SlickSlider {...settings} className="rounded-lg overflow-hidden">
      {slidesData.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.image}
            alt={`Slider Image ${index + 1}`}
            className="w-full"
          />
          <div
            className={`absolute ${
              index === 0
                ? "right-2 md:right-12 lg:right-10 pr-6 md:pr-16"
                : "left-6 md:left-12 lg:left-10 pl-6 md:pl-16"
            } top-1/3 transform -translate-y-1/2 w-5/12`}
          >
            <button className="bg-slate-900 text-white px-2 my-6 rounded	">
              {slide.buttonLabel}
            </button>
            <h2 className="text-2xl md:text-3xl lg:text-7xl break-normal font-bold">
              {slide.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg mt-6">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </SlickSlider>
  );
};

export default Slider;
