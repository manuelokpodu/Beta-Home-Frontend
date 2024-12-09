import React,{useState} from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerschema } from "../../utils/formValidator";
import { ToastContainer, toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import axios from "axios";

const SignUp = () => {
    const redirect = useNavigate();
 
    const [isSubmitting, setIsSubmitting] = useState(false);
   
   
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(registerschema),
    });
    const onSubmit = async (data) => {
      setIsSubmitting(true);
      console.log(data);
      // Handle form submission
      try {
        const { data: result } = await axios.post(
          "https://tayo-betahome.onrender.com/api/v1/register",
          data
        );
        setIsSubmitting(false);
        if (result.success) {
          // redirect to login
          redirect("/signin");
        }
      } catch (error) {
        console.log(error);
        setIsSubmitting(false);
        toast.error(error?.response?.data?.error);
      }
    };
  return (
    <section className="signing-section d-flex flex-row ">
      <div className="d-flex justify-content-center align-items-center form-part p-1 p-lg-4 ">
        <form onSubmit={handleSubmit(onSubmit)} className=" p-2 p-lg-5 ">
          <ToastContainer autoClose={7000} />
          <Link to="/" className="d-block mx-auto text-center my-2">
            <img src={logo} alt="Logo" style={{ width: "120px" }} />
          </Link>
          <h2>
            Join our community of home seekers and explore the possibilities
            that await.{" "}
          </h2>
          <p>Lets get started by filling out the information below</p>
          <div className="d-lg-flex align-items-between justify-content-between gap-2">
            <div>
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                placeholder="Enter Name"
                className={`form-control rounded-4 shadow-none mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Enter Name"
                className={`form-control rounded-4 shadow-none mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                {...register("lastName")}
              />

              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className={`form-control rounded-4 shadow-none mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                errors.email ? "is-invalid" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
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
              className={`form-control rounded-4 shadow-none mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                errors.password ? "is-invalid" : ""
              }`}
              {...register("password")}
            />

            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="my-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm your password"
              className={`form-control rounded-4 shadow-none mx-auto my-3 text-dark border-1 border-secondary p-3 ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword.message}</div>
            )}
          </div>
          <div className="my-3 form-check">
            <input type="checkbox" id="agree" className="form-check-input" />
            <label htmlFor="agree" className="form-check-label">
              I agree to <span className="text-success">Terms of Service</span>{" "}
              and <span className="text-success">Privacy Policies</span>
            </label>
          </div>
          <div className="my-3">
            <button
              type="submit"
              className="btn text-white  w-100 d-block "
              style={{
                borderRadius: "15px",
                padding: " 7px 10px 7px 10px",
                backgroundColor: "#3D9970",
              }}
              extraClass={"submitbtn mx-auto d-block w-100"}
            >
            {  isSubmitting ? "Signing up....." : "Sign Up"}
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
            or
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
          </div>

          <button
            className="btn border border-dark border-2 w-100 mb-4 "
            style={{
              borderRadius: "15px",
              padding: " 7px 10px 7px 10px",
            }}
          >
            <FcGoogle />
            Continue with Google
          </button>

          <p className="my-2 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-success text-decoration-none">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div className="signing-bg d-none d-lg-block w-50">
           <Link to="/"> 
           
        <img src= {logo}  h  alt=""  className="p-5"/>
           </Link>
       </div>
    </section>
  );
};

export default SignUp;
