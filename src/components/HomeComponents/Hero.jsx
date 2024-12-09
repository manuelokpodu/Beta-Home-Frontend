import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const Hero = () => {
  const [bedroomCount, setBedroomCount] = useState(0);
  const handleIncrement = () => {
    setBedroomCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setBedroomCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent going below 0
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {/* Browse our properties */}
      <div className="text-center text-white mt-5">
        <h1 className="fs-1 mainfont fw-medium "> Browse Our Properties</h1>
        <p className="fs-5 mt-4 ">
          Find your perfect home among our curated properties. Start <br />{" "}
          browsing now!
        </p>
      </div>

      {/* form */}
      <div
        className="container mb-5  d-none d-lg-flex justify-content-center align-items-center "
        style={{ backgroundColor: "#FFFFFF33", height: "135px" }}
      >
        <form
          className="bg-white  d-flex  justify-content-between align-items-center gap-4 "
          style={{
            height: "86px",
            borderRadius: "10px",
            width: "1188px",
          }}
        >
          
          <div className="text-center">
            <label htmlFor="location" className="form-label fw-bold">
              LOCATION
            </label>
            <input
              type="text"
              id="location"
              className="form-control text-center  "
              placeholder="eg.  Gbagada"
              style={{ border: "none" }}
            />
          </div>

          <hr className="form-hr" />

          <div className="text-center">
            <label htmlFor="property" className="form-label fw-bold">
              PROPERTY TYPE
            </label>
            <input
              type="text"
              id="property"
              className="form-control text-center "
              placeholder="eg. Duplex, Bedroom Flat"
              style={{ border: "none" }}
            />
          </div>

          <hr className="form-hr" />

          <div className="text-center ">
            <label htmlFor="bedroom" className="form-label fw-bold">
              BEDROOM
            </label>
            <div className="input-wrapper">
              {/* Minus icon */}
              <CiCircleMinus className="icon" onClick={handleDecrement} />

              {/* Number Display */}
              <input
                type="text"
                id="bedroom"
                className="bedroom-input"
                value={bedroomCount}
                readOnly // Prevent manual input
              />

              {/* Plus icon */}
              <CiCirclePlus className="icon" onClick={handleIncrement} />
            </div>
          </div>

          <button className="find-button text-white"> Find Property</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
