import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { reviews } from "../constants";

const ReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "50px",
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
    <div className="overflow-hidden border-4 border-solid border-gray-600 rounded-xl">
      <h2 className="text-white text-center text-2xl mt-3">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4">
            <div
              key={index}
              className="bg-white border border-gray-900 rounded-lg p-4 m-4 shadow-xl"
            >
              <h3 className="text-slate-500 text-lg font-bold mb-2">
                {review.name}
              </h3>
              <p className="text-gray-500 italic mb-2">{review.source}</p>
              <p className="text-slate-500">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer text-2xl text-gray-900 hover:text-gray-700 z-10"
    onClick={props.onClick}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
);
const CustomNextArrow = (props) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-2xl text-gray-900 hover:text-gray-700 z-10"
    onClick={props.onClick}
  >
    <FontAwesomeIcon icon={faArrowRight} />
  </div>
);

export default ReviewsCarousel;
