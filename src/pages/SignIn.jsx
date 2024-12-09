import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginschema } from "../../utils/formValidator";
import { ToastContainer, toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import axios from "axios";
const SignIn = () => {
  const redirect = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginschema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Handle form submission
    data.email = data.email.toLowerCase();
    try {
      const { data: result } = await axios.post(
        "https://tayo-betahome.onrender.com/api/v1/login",
        data
      );
      setIsSubmitting(false);
      if (result.success) {
        localStorage.setItem("token", result.token);
        // redirect to homepage
        redirect("/");
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <section className="signing-section d-flex flex-row vh-100 ">
      <div className="d-flex justify-content-center align-items-center form-part p-1 p-lg-4 ">
        <form className=" p-2 p-lg-5 " onSubmit={handleSubmit(onSubmit)}>
          <ToastContainer autoClose={7000} className={`position-absolute`} />
          <Link to="/" className="d-block  my-2 text-center">
            <img src={logo} alt="" style={{ width: "90px" }} />
          </Link>
          <h2>Welcome Back to BetaHouse! </h2>
          <p>Lets get started by filling out the information below</p>

          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className={`form-control rounded-4 shadow-none  mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                errors.email ? "is-invalid" : ""
              } `}
              {...register("email")}
            />

            {errors.email && (
              <div className="invalid-feedback neededwidth">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="my-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`form-control rounded-4 shadow-none  mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                errors.password ? "is-invalid" : ""
              } `}
              {...register("password")}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="d-flex my-3 justify-content-between align-items-center">
            <div className=" form-check ">
              <input type="checkbox" id="agree" className="form-check-input" />
              <label htmlFor="agree" className="form-check-label">
                Remember Me
              </label>
            </div>
            <div>
              <label htmlFor="agree" className="form-check-label text-danger">
                Forgot Password
              </label>
            </div>
          </div>

          <div className="my-3">
            <button
              type="submit"
              className="btn btn-success w-100 d-block"
              style={{
                borderRadius: "15px",
                padding: " 7px 10px 7px 10px",
                backgroundColor: "#3D9970",
              }}
              extraClass={"submitbtn mx-auto d-block neededwidth"}
            >
              {isSubmitting ? "Logging In..... " : "Log In"}
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
            or
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
          </div>

          <button
            className="btn border border-dark border-2 w-100 mb-3"
            style={{
              borderRadius: "15px",
              padding: " 7px 10px 7px 10px",
            }}
          >
            <FcGoogle />
            Continue with Google
          </button>

          <p className="my-2 text-center ">
            New User?{" "}
            <Link to="/signup" className="text-success text-decoration-none ">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="signing-bg d-none d-lg-block w-50">
        <Link to="/">
          <img src={logo} alt="" className="p-5" />
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
