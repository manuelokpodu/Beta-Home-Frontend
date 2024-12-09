import React, { useEffect, useState } from "react";
import icon from "../../assets/images/icon.png";
import chain from "../../assets/images/chain.png";
import camera from "../../assets/images/camera.png";
import picture from "../../assets/images/picture.png";
import mapp from "../../assets/images/mapp.png";
import bed from "../../assets/images/bed.png";
import toilet from "../../assets/images/toilet.png";
import arrow from "../../assets/images/arrow.png";
import shuttle from "../../assets/images/shuttle.png";
import love from "../../assets/images/like.png";

import { FaNairaSign } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

import "../../styles/properties.css";
import axios from "axios";
import FallBackLoader from "../FallBackLoader";
import PropertyCard from "../PropertyCard";
// import Paginate from "../Paginate";

const Properties = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const { data } = await axios("https://beta-home-backend-1.onrender.com");
      setIsLoading(false);
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProperties();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5 align-items-center">
        <FallBackLoader />
      </div>
    );
  }
  return (
    <section className="container mt-5">
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-between align-items-center flex-row gap-5">
          {" "}
          <div className="d-flex gap-3">
            <img src={icon} alt="" /> <span> More Filter</span>
          </div>{" "}
          <div> Showing 1 – 10 of 15 results </div>
        </div>

        <form className="d-flex gap-3 align-items-center ">
          {" "}
          <p
            style={{
              fontSize: "21px",
              fontWeight: "400",
              color: "#717171",
              marginBottom: "0",
            }}
          >
            Sort by:
          </p>
          <select
            name=""
            id="defaultProperty"
            style={{ border: "none", outline: "none", color: "#717171" }}
            className="custom-select"
          >
            <option value=""> Default</option>
            <option value=""> Default</option>
            <option value=""> Default</option>
          </select>
        </form>
      </div>

      {/* card */}
      <div className="d-flex gap-5 justify-content-between align-items-center flex-wrap">
        {/* {properties.map((info) => {
          return <PropertyCard key={info._id} {...info} />;
        })} */}
      </div>

      {/* pagination */}
      <div className="d-flex justify-content-center align-items-center gap-4 my-5 page-numbers">
        <RiArrowLeftSLine />
        <p className="d-flex align-items-center">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <RiArrowRightSLine />
      </div>

      {/* <Paginate /> */}
    </section>
  );
};

export default Properties;
