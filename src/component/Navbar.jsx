import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">All Movies</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/">Add Movie</NavLink>
          </li>
          <li>
            <NavLink to="/">My Favorites</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        navigate("/auth/login");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl">
            <img
              className="w-8 rounded-xl"
              src="https://i.ibb.co.com/FkCX7FLp/Movie-Deck.png"
              alt="Movie Deck"
            />
            Movie Deck
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <button onClick={handleSignOut} className="btn btn-sm btn-outline">
              Log out
            </button>
          ) : (
            <NavLink to="/auth/login" className="btn btn-sm btn-outline">
              Login
            </NavLink>
          )}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
