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
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="reviews-section" style={{ overflow: "hidden" }}>
      <h2>Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            className="review-card"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              margin: "16px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {review.name}
            </h3>
            <p style={{ color: "#666", fontStyle: "italic" }}>
              {review.source}
            </p>
            <p style={{ marginTop: "8px" }}>{review.review}</p>
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
