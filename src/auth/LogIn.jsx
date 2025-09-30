import { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import SocialLogIn from "./SocialLogIn";

const LogIn = () => {
  const { signInUser, forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Good job!",
            text: "Sign In Succesfully",
            icon: "success",
          });
          const redirectTo = location.state || "/";
          navigate(redirectTo);
        }
      })
      .catch((error) => {
        const errMesage = error.message;
        const splitMsg = errMesage.split("/")[1];
        const sliceMsg = splitMsg.slice(0, 18);
        setErrorMessage(sliceMsg);
      });
  };
  const handleUpdatePassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please Type Valid Email");
    } else {
      forgetPassword(email).then(() => {
        alert("send email for password reset");
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4 py-8">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
              Login now!
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label text-sm sm:text-base">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full text-sm sm:text-base"
                  name="email"
                  placeholder="Enter your email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-sm sm:text-base">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full text-sm sm:text-base"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="text-left">
                <button
                  type="button"
                  className="link link-hover text-sm sm:text-base "
                >
                  Forgot password?
                </button>
              </div>
              <div className="form-control mt-4 sm:mt-6">
                <button
                  className="btn  w-full text-sm sm:text-base"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
            <p className="text-center text-sm sm:text-base mt-4">
              Don't have an account?
              <NavLink
                className="btn-ghost font-bold ml-1 hover:underline"
                to="/auth/register"
              >
                Sign up
              </NavLink>
            </p>
            {errorMessage && (
              <div className="alert alert-error mt-4">
                <span className="text-xs sm:text-sm">
                  {errorMessage} - Please enter valid email or password
                </span>
              </div>
            )}
            <div className="divider text-sm sm:text-base">Or, login with</div>
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
