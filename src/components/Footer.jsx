import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-bg  py-5 text-white ">
      {/* top div */}
      <div className="container d-flex justify-content-between footer-description ">
        {/* four divs */}
        <div className=" d-flex flex-column gap-5  ">
          <img src={logo} alt="" className="img-fluid" />
          <h4
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "25.6px",
            }}
          >
            Discover, rent, and find your ideal home hassle-free <br /> with
            BetaHouse. Take control of your rental journey <br /> today!
          </h4>

          <div className="details">
            {" "}
            <p className="d-flex gap-3 align-items-center">
              {" "}
              <FaMapMarkerAlt />
              95 Tinubu Estate, Lekki, Lagos
            </p>
            <p className="d-flex gap-3 align-items-center">
              {" "}
              <IoCall />
              +234 675 8935 675
            </p>
            <p className="d-flex gap-3 align-items-center">
              {" "}
              <HiOutlineMail />
              support@rentbetahouse.com
            </p>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 quick-links">
          <h2 className="fw-bold">Quick Links</h2>
          <Link
            to="/"
            className="nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Home
          </Link>

          <Link
            to="#"
            className="nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Properties
          </Link>

          <Link
            to="#"
            className=" nav-link "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            About Us
          </Link>

          <Link
            to="#"
            className=" nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Contact Us
          </Link>
          <Link
            to="#"
            className=" nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Blog
          </Link>
        </div>
        <div className="d-flex flex-column gap-4 quick-links">
          <h2 className="fw-bold">More</h2>
          <Link
            to="#"
            className="nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Agents
          </Link>

          <Link
            to="#"
            className="nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Affordable Houses
          </Link>

          <Link
            to="#"
            className=" nav-link "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            FAQ’s
          </Link>
        </div>
        <div className="d-flex flex-column gap-4 quick-links">
          <h2 className="fw-bold">Popular Search</h2>
          <Link
            to="#"
            className="nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Apartment for sale
          </Link>

          <Link
            to="#"
            className="nav-link  "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Apartment for rent
          </Link>

          <Link
            to="#"
            className=" nav-link "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            3 bedroom flat
          </Link>

          <Link
            to="#"
            className=" nav-link "
            style={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Bungalow
          </Link>
        </div>
      </div>

      <hr />
      {/* bottom div */}
      <div className=" container d-flex justify-content-between align-items-center text-white">
        {" "}
        <h2
          style={{
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          Copyright 2023 Betahouse | Designed by Michael.fig
        </h2>
        <Link
          to="#"
          className=" nav-link "
          style={{
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
