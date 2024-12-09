import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FallBackLoader from "./FallBackLoader";
import SliderCard from "./SliderCard";

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#F4F4F4",
        height: "54px",
        width: "54px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27px",
        position: "absolute",
        top: "50%", // Center vertically
        right: "-18px", // Adjust spacing from right
        transform: "translateY(-50%)", // Center vertically
        zIndex: "1",
        cursor: "pointer",
      }}
    >
      <FaChevronRight style={{ fontSize: "20px", color: "#000" }} />
    </div>
  );
};

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#F4F4F4",
        height: "54px",
        width: "54px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27px",
        position: "absolute",
        top: "50%", // Center vertically
        left: "-25px", // Adjust spacing from left
        transform: "translateY(-50%)", // Center vertically
        zIndex: "1",
        cursor: "pointer",
      }}
    >
      <FaChevronLeft style={{ fontSize: "20px", color: "#000" }} />
    </div>
  );
};

const SliderProperty = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const { data } = await axios(
        "https://tayo-betahome.onrender.com/api/v1/property"
      );
      setIsLoading(false);
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false, // Disable autoplay
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5 align-items-center">
        <FallBackLoader />
      </div>
    );
  }

  return (
    <div className="my-5">
      <Slider {...settings} className="slider-container">
        {properties.map((prop) => {
          return <SliderCard key={prop._id} {...prop} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderProperty;
