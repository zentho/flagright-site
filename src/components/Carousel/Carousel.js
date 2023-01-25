import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slick-carousel.css";
import Ball from "../../media/svg/Ball";
import Bar from "../../media/svg/Bar";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => {
      const dotIdIsActive = (id) => dots[id].props.className === "slick-active";
      return (
        <ul>
          {dots.map((dot) => {
            return (
              <button>
                <div className="absolute bottom-0">
                  {dot.props.className === "slick-active" ? (
                    <Bar />
                  ) : (
                    <div className={`${dotIdIsActive(0) ? "ml-6" : dotIdIsActive(1) ? "ml-3" : "mr-6"}`}>
                      <Ball />
                    </div>
                  )}
                </div>
                <div>{dot}</div>
              </button>
            );
          })}
        </ul>
      );
    },
  };

  return (
    <div className="max-w-lg mx-auto ">
      <Slider {...settings}>
        <div className="flex flex-col p-12 bg-[#0E0C2C] rounded-xl  mb-3">
          <h3 className="mb-6 text-xl font-semibold text-gray-500">Average response time</h3>
          <p className="text-4xl text-[#e0a143] font-semibold">700ms</p>
        </div>
        <div className="flex flex-col p-12 bg-[#0E0C2C] rounded-xl  mb-3">
          <h3 className="mb-6 text-xl font-semibold text-gray-500">Minimum response time</h3>
          <p className="text-4xl text-[#e0a143] font-semibold">200ms</p>
        </div>
        <div className="flex flex-col p-12 bg-[#0E0C2C] rounded-xl  mb-3">
          <h3 className="mb-6 text-xl font-semibold text-gray-500">Speed relative to industry</h3>
          <p className="text-4xl text-[#e0a143] font-semibold">185%</p>
        </div>
      </Slider>
    </div>
  );
}
