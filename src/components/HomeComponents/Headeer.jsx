import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import aisha from "../../assets/images/aisha.png";
import "../../styles/headeer.css";
import Hero from "./Hero";

const Headeer = () => {
  return (
    <div className="header-bg">
      <div className=" position-sticky top-0  ">
        <Navbar expand="lg" className="fs-4 ">
          <Container className="py-3 ">
            <Navbar.Brand>
              <div>
                <img src={logo} alt="Beta House" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-white"
            />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="ms-auto   ">
                <Link
                  to="/"
                  className="nav-link  "
                  style={{ color: "#F5F5F5" }}
                >
                  Home
                </Link>

                <Link
                  to="#"
                  className="nav-link  "
                  style={{ color: "#F5F5F5" }}
                >
                  Properties
                </Link>

                <Link
                  to="#"
                  className=" nav-link "
                  style={{ color: "#F5F5F5" }}
                >
                  About Us
                </Link>

                <Link
                  to="#"
                  className=" nav-link  "
                  style={{ color: "#F5F5F5" }}
                >
                  Blog
                </Link>

                <Link
                  to="#"
                  className=" nav-link  "
                  style={{ color: "#F5F5F5" }}
                >
                  Contact Us
                </Link>
              </Nav>
              <NavDropdown
                title={
                  <span className="">
                    <img src={aisha} alt="" />
                    <span className="dropdown-text "> Aisha Cucurella</span>
                  </span>
                }
                id="basic-nav-dropdown "
                className="text-white fs-4 ms-auto  "
              >
                <LinkContainer to="/signin ">
                  <NavDropdown.Item>Sign In</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavDropdown.Item>Sign Up</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              ;
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Hero />
    </div>
  );
};

export default Headeer;
