import React from 'react'
import "animate.css";

import logo from "../assets/images/logo.png"
import { ThreeDots } from "react-loader-spinner";
const FallBackLoader = () => {
  return (
    <div className="animate__animated animate__zoomIn vh-100">
      <div className="">
        <img src={logo} width={"250px"} className="object-fit-cover" alt="" />
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#0DCAF0"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default FallBackLoader