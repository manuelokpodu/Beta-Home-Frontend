import React from "react";
import icon from "../assets/images/icon.png";
import chain from "../assets/images/chain.png";
import camera from "../assets/images/camera.png";
import picture from "../assets/images/picture.png";
import mapp from "../assets/images/mapp.png";
import bed from "../assets/images/bed.png";
import toilet from "../assets/images/toilet.png";
import arrow from "../assets/images/arrow.png";
import shuttle from "../assets/images/shuttle.png";
import love from "../assets/images/like.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";


const PropertyCard = ({
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
      className="card propertycard rounded-2 my-3 mx-auto "
      style={{ width: "340px", height: "500px" }}
    >
      <div className="position-relative h-50">
        <img
          src={image}
          alt={title}
          className="w-100 object-fit-cover h-100 rounded-top"
        />
        <p
          className="bg-success p-2 d-inline-block text-white rounded-2 position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          Featured
        </p>
        <p
          className="bg-secondary p-2 d-inline-block text-white rounded-2 position-absolute"
          style={{ top: "10px", right: "10px" }}
        >
          For {availability}
        </p>

        <div
          style={{ bottom: "10px", right: "10px" }}
          className="d-flex gap-2 justify-content-end position-absolute"
        >
          <img src={camera} className="" alt="" />
          <img src={chain} alt="" />
          <img src={picture} alt="" />
        </div>
      </div>
      <div className="p-3">
        <h3>{title} </h3>
        <p className="d-flex align-items-center gap-2">
          {" "}
          <FaMapMarkerAlt /> {location}{" "}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p>
            <img src={bed} alt="" /> {bedrooms} Bedrooms
          </p>
          <p>
            <img src={toilet} alt="" /> {bathrooms} Bathrooms
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="d-flex align-items-center ">
            <TbCurrencyNaira /> {price}{" "}
          </h3>

          <div className="d-flex gap-4">
            <img src={arrow} alt="" />
            <img src={shuttle} alt="" />
            <img src={love} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
