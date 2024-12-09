import React from "react";
import "../../styles/popular.css";
import SliderProperty from "../SliderProperty";

const Popular = () => {
  return (
    <div className="container">
      <h1 className="fw-bolder fs-1 text-center my-5">
        Discover Our Popular Properties
      </h1>
      <SliderProperty />
    </div>
  );
};

export default Popular;
