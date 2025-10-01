import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import SocialLogIn from "./SocialLogIn";

const Register = () => {
  const { signUpUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    //  password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one lowercase letter."
      );
    }

    signUpUser(email, password)
      .then((result) => {
        profileUpdate(name, url);
        Swal.fire({
          title: "Good job!",
          text: "Sign Up Succesfully",
          icon: "success",
        });
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        const errMesage = error.message;
        setErrorMessage(errMesage);
      });
  };

  return (
    <div className="flex items-center justify-center bg-base-200 min-h-screen px-4 py-8">
      <div className="w-full  max-w-md">
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
              Register now!
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label text-sm sm:text-base">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full text-sm sm:text-base"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-sm sm:text-base">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  className="input input-bordered w-full text-sm sm:text-base"
                  name="url"
                  placeholder="Enter your photo URL"
                />
              </div>
              <div className="form-control">
                <label className="label text-sm sm:text-base">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full text-sm sm:text-base"
                  name="email"
                  placeholder="Enter your email"
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
              <div className="form-control mt-4 sm:mt-6">
                <button
                  className="btn  w-full text-sm sm:text-base"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center text-sm sm:text-base mt-4">
              Already have an account?
              <NavLink
                className="font-bold ml-1 hover:underline"
                to="/auth/login"
              >
                Log in Now
              </NavLink>
            </p>
            {errorMessage && (
              <div className="alert alert-error mt-4">
                <span className="text-xs sm:text-sm">{errorMessage}</span>
              </div>
            )}
            <div className="divider text-sm sm:text-base">
              Or, register with
            </div>
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
