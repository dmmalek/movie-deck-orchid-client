import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
  const { signInByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleLogIn = () => {
    signInByGoogle().then((result) => {
      if (result.user) {
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      }
    });
    // .catch((error) => console.log(error.message));
  };
  return (
    <div className="text-center">
      <div className="py-2">
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline hover:bg-green-600 hover:text-white hover:border-green-600 text-teal-600 font-semibold w-full text-sm sm:text-base transition-colors duration-200"
        >
          <FaGoogle className="text-lg" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
