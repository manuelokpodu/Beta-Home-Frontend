import React from "react";

const SliderCard = ({
  _id,
  image,
  title,
  location,
  bedrooms,
  bathrooms,
  availability,
  price,
}) => {
  return (
    <div
      style={{ width: "300px", height: "412px" }}
      className="position-relative text-white"
    >
      <img
        src={image}
        alt={title}
        className="w-100 h-100 rounded-2 object-fit-cover "
      />
      <div
        className="position-absolute bottom-0 p-3  w-100 slider-card-inner"
        style={{ backgroundColor: "#4A4A4C33" }}
      >
        <h2 className="fs-5"> {title} </h2>
        <p>{price} </p>
        <p>{location} </p>
      </div>
    </div>
  );
};

export default SliderCard;
