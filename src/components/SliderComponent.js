import React from "react";
import Slider from "react-slick";

import "./css/slider.css";

const SliderComponent = ({ frases }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {frases.map((frase, index) => (
          <div key={index} className="slide">
            <h2>{frase}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
