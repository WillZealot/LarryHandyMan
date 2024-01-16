import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { reviews } from "../constants";

const ReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // This is the breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <h2 className="text-white text-center text-2xl">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4">
            <div key={index} className="bg-white border border-gray-900 rounded-lg p-4 m-4 shadow-md">
              <h3 className="text-slate-500 text-lg font-bold">{review.name}</h3>
              <p className="text-gray-500 italic">{review.source}</p>
              <p className="mt-2 text-slate-500">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div onClick={props.onClick}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
);
const CustomNextArrow = (props) => (
  <div onClick={props.onClick}>
    <FontAwesomeIcon icon={faArrowRight} />
  </div>
);

export default ReviewsCarousel;
